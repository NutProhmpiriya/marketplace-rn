import { CartItem } from '@/stores/cartStores'
import { User } from '@/stores/userStores'
import firestore from '@react-native-firebase/firestore'
import { createNotificationForCreateOrder } from './notification.services'

export interface OrderItem {
    productId: string
    name: string
    price: number
    quantity: number
}

export interface Order {
    id: string
    orderItems: OrderItem[]
    totalprice: number
    createdAt?: {
        seconds?: number
        nanoseconds?: number
    }
    paymentStatus: string
    paymentId: string
    customer?: {
        id: string
        name: string
        email: string
        phone: string
    }
    address?: {
        street: string
        city: string
        state: string
        zip: string
    }
}

export async function creeateOrderByFirebase(cart: CartItem[], paymentId: string, user: User) {
    try {
        let orderId = ''
        const order = {
            orderItems: cart.map((item) => ({
                productId: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
            totalprice: cart.reduce((total, item) => total + item.price * item.quantity, 0),
            createdAt: firestore.FieldValue.serverTimestamp(),
            paymentStatus: 'paid',
            paymentId: paymentId,
            customer: {
                id: user.uuid,
                name: user.displayName,
                email: user.email,
                phone: user.phoneNumber,
            },
        }
        await firestore().collection('Orders').add(order)
            .then((docRef) => {
                console.log('Create Order Sucess: ', docRef.id)
                orderId = docRef.id
            })
            .catch((error) => {
                console.error('Create Order Error: ', error)
            })
        await createNotificationForCreateOrder({ customerId: user.uuid || '', customerName: user.displayName || '' })
    } catch (error: any) {
        console.error('Create Order Error: ', error)
        throw new Error(error)
    }
}


export async function getOrders(user: User): Promise<Order[]> {
    try {
        const orders: Order[] = []
        const querySnapshot = await firestore().collection('Orders')
            .where('customer.id', '==', user.uuid)
            .get()
        querySnapshot.forEach((doc) => {
            const order = doc.data() as Order
            order.id = doc.id
            orders.push(order)
        })
        return orders
    } catch (error: any) {
        console.error('Get Orders Error: ', error)
        throw new Error(error)
    }
}

export async function getOrder(orderId: string): Promise<Order> {
    try {
        const doc = await firestore().collection('Orders').doc(orderId).get()
        const order = doc.data() as Order
        order.id = doc.id
        return order
    } catch (error: any) {
        console.error('Get Order Error: ', error)
        throw new Error(error)
    }
}
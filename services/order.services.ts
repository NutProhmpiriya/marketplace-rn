import { CartItem } from '@/stores/cartStores'
import { User } from '@/stores/userStores'
import firestore from '@react-native-firebase/firestore'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

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
    createdAt: number
    paymentStatus: string
    paymentId: string
}

export async function createOrder(amount: number): Promise<string> {
    try {
        const url = ''
        const headers = { 'Content-Type': 'application/json' }
        const body = { amount: amount }
        const response = await axios.post(url, body, { headers })
        return response.data.client_secret
    } catch (error: any) {
        const errorMessage = error.response.data || error.message
        throw new Error(errorMessage)
    }
}

export async function creeateOrderByFirebase(cart: CartItem[], paymentId: string, user: User) {
    try {
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
            })
            .catch((error) => {
                console.error('Create Order Error: ', error)
            })
        console.log('Create Order Sucess')
    } catch (error: any) {
        console.log('Create Order Error: ', error)
        throw new Error(error)
    }
}

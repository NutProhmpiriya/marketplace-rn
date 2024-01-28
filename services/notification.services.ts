import firestore from '@react-native-firebase/firestore'
import { Notification } from "@/stores/notitStores"

interface CreateNotification { 
    customerId: string
    customerName: string
}

export async function createNotificationForCreateOrder(input: CreateNotification) {
    try {
        const message = {
            notification: {
                title: 'New Order',
                body: `You have a new order from ${input.customerName}`,
            },
            customerId: input.customerId,
            isReaded: false,
            createAt: firestore.FieldValue.serverTimestamp(),
            updateAt: firestore.FieldValue.serverTimestamp(),
        }
        await firestore().collection('Notifications').add(message)
        console.log('Send Notification Success')
    } catch (error: any) {
        console.error('Send Notification Error: ', error)
    }
}

export async function getNotificationUnReadByCustomerId(customerId: string): Promise<Notification[] | undefined>{
    try {
        const response = await firestore().collection('Notifications').where('customerId', '==', customerId).get()
        const notifications = response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        return notifications as Notification[] | []
    } catch (error: any) {
        console.error('Get Notification Error: ', error)
    }
}

export async function updateNotificationReaded(notificationId: string) {
    try {
        await firestore().collection('Notifications').doc(notificationId).update({
            isReaded: true,
        })
        console.log('Update Notification Success')
    } catch (error: any) {
        console.error('Update Notification Error: ', error)
    }
}

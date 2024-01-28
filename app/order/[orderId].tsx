import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Order, getOrder } from '@/services/order.services'
import OrderItemCard from '@/components/order/OrderItemCard'

const OrderDetail = () => {
    const [order, setOrder] = useState<Order | null>(null)
    const { orderId } = useLocalSearchParams()

    useEffect(() => {
        fetchOrder()
    }, [])

    const fetchOrder = async () => {
        const order = await getOrder(orderId.toString())
        setOrder(order)
    }

    const convertTime = () => {
        if (!order?.createdAt) return ''
        const date = new Date(order?.createdAt?.seconds * 1000)
        return date.toLocaleString()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Stack.Screen options={{ title: `Order: ${orderId}` }} />
                <View style={styles.orderDetail}>
                    <Text style={styles.textTitle}>Order Infomation</Text>
                    <Text style={styles.textDescription}>Order Detail: {orderId}</Text>
                    <Text style={styles.textDescription}>Payment Status: {order?.paymentStatus}</Text>
                    <Text style={styles.textDescription}>Payment ID Detail: {order?.paymentId}</Text>
                    <Text style={styles.textDescription}>Total Price: {order?.totalprice}</Text>
                    <Text style={styles.textDescription}>Create At: {convertTime()}</Text>
                    <Text style={styles.textTitle}>Customer Detail</Text>
                    <Text style={styles.textDescription}>Customer Name: {order?.customer?.name}</Text>
                    <Text style={styles.textDescription}>Customer Email: {order?.customer?.email}</Text>
                    <Text style={styles.textDescription}>Customer Phone: {order?.customer?.phone}</Text>
                    {/* <Text style={styles.textTitle}>Customer Address</Text> */}
                </View>
                <View style={styles.orderCard}></View>
                {order?.orderItems.map((orderItem, index) => (
                    <OrderItemCard orderItem={orderItem} key={orderItem.name + index} />
                ))}
            </View>
        </ScrollView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        padding: 10,
    },
    orderDetail: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
    },
    orderCard: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textDescription: {
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 10,
    },
})

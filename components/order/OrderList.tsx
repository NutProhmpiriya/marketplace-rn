import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Order, getOrders } from '@/services/order.services'
import useUserStore from '@/stores/userStores'
import OrderCard from './OrderCard'
import { Heading } from '@gluestack-ui/themed'

const OrderList = () => {
    const [orders, setOrders] = useState<Order[] | null>(null)
    const { user } = useUserStore()
    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        if (!user) return
        const result = await getOrders(user)
        setOrders(result)
    }

    return (
        <View style={styles.container}>
            <Heading>OrderList</Heading>
            {orders?.map((order) => <OrderCard key={order.id} order={order} />)}
        </View>
    )
}

export default OrderList

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
    },
})

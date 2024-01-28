import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Order } from '@/services/order.services'
import { getProduct } from '@/services/product.services'
import { Divider, Badge, BadgeText } from '@gluestack-ui/themed'
import { useRouter } from 'expo-router'
import TextWrap from '../common/TextWrap'

interface OrderCardProps {
    order: Order
}
const OrderCard = ({ order }: OrderCardProps) => {
    const router = useRouter()
    const firstProduct = order.orderItems[0]
    const productDetail = getProduct(Number(firstProduct.productId))
    const goOrderDetail = () => {
        router.push(`/order/${order.id}`)
    }
    return (
        <View style={styles.container}>
            <Text>Order ID: {order.id}</Text>
            <Divider style={{ marginVertical: 5 }} />
            <View style={styles.boxProduct}>
                <Image source={{ uri: productDetail?.image }} style={styles.image} />
                <TextWrap>{productDetail?.title.substring(0, 50)}</TextWrap>
            </View>
            <View style={styles.flexEnd}>
                <Badge style={styles.badge} onTouchEnd={goOrderDetail}>
                    <BadgeText>More...</BadgeText>
                </Badge>
            </View>
        </View>
    )
}

export default OrderCard

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '100%',
        height: 150,
        borderBlockColor: '#ccc',
        marginTop: 20,
    },
    image: {
        width: 55,
        height: 55,
        marginRight: 20,
    },
    boxProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    badge: {
        width: 65,
        height: 30,
    },
    flexEnd: {
        flex: 1,
        alignItems: 'flex-end',
    },
})

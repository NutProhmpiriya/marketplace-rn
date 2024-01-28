import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { OrderItem } from '@/services/order.services'
import { getProduct } from '@/services/product.services'
import TextWrap from '../common/TextWrap'

interface OrderItemsCardProps {
    orderItem: OrderItem
}

const OrderItemCard = (props: OrderItemsCardProps) => {
    const { name, productId, price, quantity } = props.orderItem
    const productDetail = getProduct(Number(productId))

    return (
        <View style={styles.container}>
            <View style={styles.boxProduct}>
                <Image source={{ uri: productDetail?.image }} style={styles.image} />
                <TextWrap>{productDetail?.title.substring(0, 50)}</TextWrap>
            </View>
            <View style={styles.flexEnd}>
                <Text>
                    {quantity} x {price} THB
                </Text>
            </View>
        </View>
    )
}

export default OrderItemCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
    },
    boxProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    image: {
        width: 55,
        height: 55,
        marginRight: 20,
    },
    flexEnd: {
        flex: 1,
        alignItems: 'flex-end',
    },
})

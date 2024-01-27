import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import useCartStore from '@/stores/cartStores'
import CartItemCard from '@/components/cart/CartItemCard'
import SummaryCartCard from '@/components/cart/SummaryCartCard'
import EmptyCart from '@/components/cart/EmptyCart'

const CartPage = () => {
    const { cart } = useCartStore()

    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {cart.map((item) => (
                    <CartItemCard key={item.id + item.name} cartItem={item} />
                ))}
            </ScrollView>
            <SummaryCartCard />
        </View>
    )
}

export default CartPage

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
    },
})

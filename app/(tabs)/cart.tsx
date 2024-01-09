import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useCartStore from 'stores/cartStore'
import CartItemCard from 'components/cart/CartItemCard'
import { ScrollView } from 'react-native-gesture-handler'
import SummaryCartCard from 'components/cart/SummaryCartCard'
import { Box } from '@gluestack-ui/themed'

const CartPage = () => {
    const { cart } = useCartStore()

    return (
        <ScrollView style={styles.container}>
            <Box>
                {cart.map((item) => (
                    <CartItemCard key={item.id + item.name} cartItem={item} />
                ))}
            </Box>
            <SummaryCartCard />
        </ScrollView>
    )
}

export default CartPage

const styles = StyleSheet.create({
    container: {
        // position: 'relative',
    },
})

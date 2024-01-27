import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Box, Button, ButtonText } from '@gluestack-ui/themed'
import useCartStore from '@/stores/cartStores'
import { useRouter } from 'expo-router'

const SummaryCartCard = () => {
    const { cart } = useCartStore()
    const router = useRouter()

    const getTotalItem = () => {
        return cart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    }

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    }

    const gotoCheckout = () => {
        router.push('/checkout/')
    }

    return (
        <Box style={styles.container}>
            <Text>Total price {getTotalPrice()}</Text>
            <Button style={{ marginTop: 10 }} onPress={() => gotoCheckout()}>
                <ButtonText>Checkout</ButtonText>
            </Button>
        </Box>
    )
}

export default SummaryCartCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // borderRadius: 10,
        padding: 10,
        // marginHorizontal: 10,
        // marginTop: 10,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        position: 'sticky',
        bottom: 0,
    },
})

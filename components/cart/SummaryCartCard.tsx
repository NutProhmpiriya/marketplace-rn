import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, ButtonText } from '@gluestack-ui/themed'
import useCartStore from 'stores/cartStore'

const SummaryCartCard = () => {
    const { cart } = useCartStore()

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

    return (
        <Box style={styles.container}>
            <Text>Adress</Text>
            <Text>Payment Method</Text>
            <Text>Total price {getTotalPrice()}</Text>
            <Button>
                <ButtonText>Checkout</ButtonText>
            </Button>
        </Box>
    )
}

export default SummaryCartCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // position: 'absolute',
        // bottom: 0,
    },
})

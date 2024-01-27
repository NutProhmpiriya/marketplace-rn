import { StyleSheet, View } from 'react-native'
import React from 'react'
import useCartStore, { CartItem } from '@/stores/cartStores'
import { Image, Box, Text, Button, ButtonText } from '@gluestack-ui/themed'

interface CartItemCardProps {
    cartItem: CartItem
}

const CartItemCard = (props: CartItemCardProps) => {
    const { id, image, name, price, quantity } = props.cartItem
    const { addCartItem, deleteCartItem } = useCartStore()
    return (
        <Box style={styles.container} justifyContent="space-between">
            <Image flex={1} source={{ uri: image }} alt={name} h={'100%'}></Image>
            <Box flex={1} style={styles.detail}>
                <Text flexWrap="wrap">
                    {name.substring(0, 25)} {name.length > 25 && '....'}
                </Text>
                <Box>
                    <Text>{price * quantity}</Text>
                    <Text>{quantity}</Text>
                </Box>
            </Box>
            <Box flex={1} style={styles.action} gap={'$5'}>
                <Button flex={1} onPress={() => addCartItem(props.cartItem)}>
                    <ButtonText>+</ButtonText>
                </Button>
                <Button flex={1} onPress={() => deleteCartItem(props.cartItem)}>
                    <ButtonText>-</ButtonText>
                </Button>
            </Box>
        </Box>
    )
}

export default CartItemCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
    },
    detail: {
        padding: 10,
    },
    action: {},
})

import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Badge, BadgeText } from '@gluestack-ui/themed'
import useCartStore from '@/stores/cartStores'

interface CartBadgeProps {
    color: string
    size: number
}

const CartBadge = (props: CartBadgeProps) => {
    const { cart } = useCartStore()
    const totalCart = cart.reduce((total, item) => total + item.quantity, 0)
    if (totalCart === 0) return <Ionicons name="cart-outline" size={props.size} color={props.color} />

    return (
        <View>
            <Badge
                h={22}
                w={22}
                bg="$red600"
                borderRadius="$full"
                mb={-18}
                mr={-14}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
            >
                <BadgeText color="$white">{totalCart}</BadgeText>
            </Badge>
            <Ionicons name="cart-outline" size={props.size} color={props.color} />
        </View>
    )
}

export default CartBadge

const styles = StyleSheet.create({})

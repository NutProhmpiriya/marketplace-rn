import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductInterface } from '@/components/products/ProductCard'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Box, Button, ButtonText, Divider, Heading, Image, ScrollView } from '@gluestack-ui/themed'
import useCartStore from '@/stores/cartStores'
import * as productData from '@/services/product.services'

const ProductDetailPage = () => {
    const { id } = useLocalSearchParams()
    const [product, setProduct] = useState<ProductInterface | null>(null)
    const router = useRouter()
    const cartStore = useCartStore()

    useEffect(() => {
        const product = productData.getProduct(Number(id))
        setProduct(product)
    }, [])

    const onAddCartItem = () => {
        if (!product) return
        cartStore.addCartItem({
            id: product?.id,
            name: product?.title,
            price: product?.price,
            image: product?.image,
            quantity: 1,
        })
        router.push('/')
    }

    const goCheckout = () => {
        router.push('/checkout/')
    }
    if (!product) {
        return <Text>Loading...</Text>
    }

    return (
        <ScrollView style={{ height: '100%' }}>
            <Stack.Screen options={{ title: 'Product Detail' }} />
            <Image source={{ uri: product?.image }} alt={product?.title} w={'$full'} h={'$96'} />
            <Box style={styles.content}>
                <Heading>{product?.title}</Heading>
                <Text>Tag: {product?.category}</Text>
                <Text>
                    Rate:
                    {product?.rating.rate}/{product?.rating.count}
                </Text>
                <Text>Price {product?.price}</Text>
                <Divider my={'$1'} />
                <Text style={styles.textDescription}>{product?.description}</Text>
            </Box>
            <Box style={styles.bottomBar} w={'100%'} justifyContent="space-between" gap={'$1'}>
                <Button style={styles.btn} onPress={onAddCartItem}>
                    <ButtonText>Add Cart</ButtonText>
                </Button>
                <Button style={styles.btn} onPress={goCheckout}>
                    <ButtonText>Check Out</ButtonText>
                </Button>
            </Box>
        </ScrollView>
    )
}

export default ProductDetailPage

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    content: {
        padding: 10,
    },
    bottomBar: {
        padding: 10,
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        flexDirection: 'row',
    },
    btn: {
        borderRadius: 10,
        backgroundColor: 'black',
        width: '50%',
        height: 60,
    },
})

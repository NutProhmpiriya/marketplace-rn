import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, Image, Text, Button } from '@gluestack-ui/themed'
import TextWrap from '@/components/common/TextWrap'
import { Link, useRouter } from 'expo-router'

interface Props {
    product: ProductInterface
}

export interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}
export interface Rating {
    rate: number
    count: number
}

const ProductCard = (props: Props) => {
    const router = useRouter()
    const { id, title, price, description, category, image, rating } = props.product
    const goToProductPage = () => {
        router.push(`/products/${id}`)
    }
    return (
        <Box flexShrink={1} w="100%" h={'$40'} flexDirection="row" style={styles.card}>
            <Image source={{ uri: image }} alt={title} h={'100%'} w={'$1/3'} />
            <Box padding={10} w={'$2/3'}>
                <TextWrap>{title}</TextWrap>
                <Text> Price: {price}</Text>
                <Button style={styles.btnMore} onTouchEnd={goToProductPage}>
                    <Text style={{ color: 'white' }}>More...</Text>
                </Button>
            </Box>
        </Box>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 10,
    },
    btnMore: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'black',
    },
})

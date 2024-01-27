import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductCard, { ProductInterface } from '@/components/products/ProductCard'
import { Box, ScrollView, Input, InputSlot, InputIcon, InputField, SearchIcon, Text } from '@gluestack-ui/themed'
import { getProducts as fetchProducts } from '@/utils/productData'

const HomePage = () => {
    const [products, setProducts] = useState<ProductInterface[] | null>(null)

    useEffect(() => {
        getProducts()
    }, [])

    const searchProducts = (value: string) => {
        if (value) {
            const filteredProducts = products?.filter((product) => product.title.includes(value))
            if (filteredProducts) setProducts(filteredProducts)
        } else {
            getProducts()
        }
    }

    const getProducts = () => {
        const products = fetchProducts()
        setProducts(products)
    }
    if (!products) {
        return <Text>Loading...</Text>
    }
    return (
        <ScrollView>
            <Input style={styles.inputSearch}>
                <InputSlot pl="$3">{/* <InputIcon as={SearchIcon} /> */}</InputSlot>
                <InputField placeholder="Search..." onChangeText={(value) => searchProducts(value)} />
            </Input>

            <Box flexDirection="row" flexWrap="wrap">
                {products?.map((product) => <ProductCard key={product.title} product={product} />)}
            </Box>
        </ScrollView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    inputSearch: {
        width: '95%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 10,
    },
})

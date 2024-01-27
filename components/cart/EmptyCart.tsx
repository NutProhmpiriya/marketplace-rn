import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const EmptyCart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <MaterialCommunityIcons name="cart-arrow-down" size={96} color="black" />
            </View>
            <Text style={styles.titleIcon}>Cart Empty</Text>
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleIcon: {
        fontSize: 20,
        marginTop: 10,
    },
})

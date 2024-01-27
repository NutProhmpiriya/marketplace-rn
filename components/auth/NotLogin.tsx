import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Button, ButtonText } from '@gluestack-ui/themed'

const NotLogin = () => {
    const router = useRouter()

    const goAuth = () => router.push(`/(modals)/auth`)

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <AntDesign name="user" size={96} color="black" />
            </View>
            <Button style={styles.btn} onPress={goAuth}>
                <ButtonText>Sign In</ButtonText>
            </Button>
        </View>
    )
}

export default NotLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
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
    btn: {
        marginTop: 50,
        backgroundColor: 'black',
        color: 'white',
        width: '75%',
        height: 50,
    },
})

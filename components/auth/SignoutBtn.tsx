import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import useUserStore from '@/stores/userStores'
import { Button, ButtonText } from '@gluestack-ui/themed'

const SignoutBtn = () => {
    const { clearUser } = useUserStore()
    const signOut = async () => {
        try {
            await auth().signOut()
            clearUser()
        } catch (error: any) {
            console.error('signOut', error.message)
        }
    }
    return (
        <Button style={styles.btn} onPress={signOut}>
            <ButtonText>Sign Out</ButtonText>
        </Button>
    )
}

export default SignoutBtn

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        color: 'white',
        width: '85%',
        height: 50,
        marginTop: 20,
    },
})

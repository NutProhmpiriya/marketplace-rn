import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoogleAuth from '@/components/auth/GoogleAuthBtn'
import useUserStore from '@/stores/userStores'
import EmailSignup from '@/components/auth/EmailSignup'
import SignoutBtn from '@/components/auth/SignoutBtn'

const SigninSection = () => {
    const { user } = useUserStore()
    return (
        <View>
            <View style={styles.container}>
                <EmailSignup />
                <Text style={styles.title}> Or</Text>
                <GoogleAuth />
                <SignoutBtn />
                {user && <Text>{JSON.stringify(user, null, 2)}</Text>}
            </View>
        </View>
    )
}

export default SigninSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})

import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SignInWithEmail from 'components/auth/SignInWithEmail'
import SignUpWithEmail from 'components/auth/SignUpWithEmail'

type AuthSatatus = 'signin' | 'signup' | 'forgetpassword'

const AuthPage = () => {
    const [authStatus, setAuthStatus] = useState<AuthSatatus>('signin')
   
    return (
        <View style={styles.container}>
            {authStatus === 'signin' && <SignInWithEmail />}
            {authStatus === 'signup' && <SignUpWithEmail/>}
        </View>
    )
}

export default AuthPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    }
})
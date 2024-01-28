import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoogleAuth from '@/components/auth/GoogleAuthBtn'
import EmailSignin from '@/components/auth/EmailSignin'
import { Button, ButtonText } from '@gluestack-ui/themed'

interface SigninSectionProps {
    setCurrentSection: (section: 'signin' | 'signup' | 'forgot') => void
}

const SigninSection = (props: SigninSectionProps) => {
    return (
        <View style={styles.container}>
            <EmailSignin />
            <View style={{ marginBottom: 20 }} />
            <GoogleAuth />
            <Text style={styles.title}> Or</Text>
            <Button variant="link" style={styles.btnSignUp} onPress={() => props.setCurrentSection('signup')}>
                <ButtonText>Sign Up</ButtonText>
            </Button>
        </View>
    )
}

export default SigninSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
    btnSignUp: {
        width: '85%',
        height: 50,
    },
})

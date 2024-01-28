import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmailSignup from './EmailSignup'
import { Button, ButtonText } from '@gluestack-ui/themed'

interface SigninSectionProps {
    setCurrentSection: (section: 'signin' | 'signup' | 'forgot') => void
}

const SiginSection = (props: SigninSectionProps) => {
    return (
        <View style={styles.container}>
            <EmailSignup />
            <Text style={styles.title}> Or</Text>
            <Button variant="link" style={styles.btnSignUp} onPress={() => props.setCurrentSection('signin')}>
                <ButtonText>Sign In</ButtonText>
            </Button>
        </View>
    )
}

export default SiginSection

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

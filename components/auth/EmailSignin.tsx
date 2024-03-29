import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import { FormControl, Input, InputField, Button, ButtonText } from '@gluestack-ui/themed'

const EmailSignin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertDialogMessage, setAlertDialogMessage] = useState('')

    const signup = () => {
        if (!email || !password) {
            setAlertDialogMessage('Please enter a valid email and password!')
            return Alert.alert('Please enter a valid email and password!')
        }
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('User account created & signed in!')
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!')
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!')
                }

                console.error(error)
            })
    }

    return (
        <View style={styles.container}>
            <FormControl size="md">
                <Input style={styles.input} size="xl" variant="outline">
                    <InputField type="text" placeholder="Email" onChangeText={(text) => setEmail(text)} />
                </Input>
                <Input style={styles.input} size="xl" variant="outline">
                    <InputField type="password" placeholder="password" onChangeText={(text) => setPassword(text)} />
                </Input>
            </FormControl>
            <Button style={styles.btn} onPress={signup}>
                <ButtonText>Sign In with Email</ButtonText>
            </Button>
        </View>
    )
}

export default EmailSignin

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
    },
    input: {
        margin: 12,
        borderWidth: 1,
        width: '95%',
    },
    btn: {
        backgroundColor: 'black',
        color: 'white',
        width: '96%',
        height: 50,
    },
})

import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import { FormControl, Input, InputField, Button, ButtonText } from '@gluestack-ui/themed'

const EmailSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showAlertDialog, setShowAlertDialog] = useState(false)
    const [alertDialogMessage, setAlertDialogMessage] = useState('')

    const signup = () => {
        if (!email || !password) {
            setAlertDialogMessage('Please enter a valid email and password!')
            return Alert.alert('Please enter a valid email and password!')
        }
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!')
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    setAlertDialogMessage('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    setAlertDialogMessage('That email address is invalid!')
                }

                console.error(error)
            })
    }

    useEffect(() => {
        if (alertDialogMessage) setShowAlertDialog(true)
    }, [alertDialogMessage])

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
                <ButtonText>Sign Up with Email</ButtonText>
            </Button>
        </View>
    )
}

export default EmailSignup

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

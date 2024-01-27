import { StyleSheet } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Button, ButtonText } from '@gluestack-ui/themed'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'

GoogleSignin.configure({
    webClientId: '103502673916-7mp784il1us2vn59c7cbvge51jk4stgm.apps.googleusercontent.com',
})

const GoogleAuthBtn = () => {
    const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
            const { idToken } = await GoogleSignin.signIn()
            const googleCredential = auth.GoogleAuthProvider.credential(idToken)
            await auth().signInWithCredential(googleCredential)
            router.push(`/`)
        } catch (error: any) {
            console.error('onGoogleButtonPress', error.message)
        }
    }
    return (
        <Button style={styles.btn} onPress={onGoogleButtonPress}>
            <AntDesign style={{ marginRight: 10 }} name="googleplus" size={24} color="white" />
            <ButtonText>Sign in with Google</ButtonText>
        </Button>
    )
}

export default GoogleAuthBtn

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'black',
        color: 'white',
        width: '85%',
        height: 50,
    },
})

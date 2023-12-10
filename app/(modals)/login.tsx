import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import firebaseService from '../../services/firebase.service'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithRedirect,
} from 'firebase/auth'

enum Strategy {
    Google = 'oauth_google',
    Apple = 'oauth_apple',
    Facebook = 'oauth_facebook',
}

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)

    const onSelectAuth = (strategy: Strategy) => {
        console.log(strategy)
    }

    const signinWithEmail = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(firebaseService.auth, email, password)
            alert('success')
            console.log(result)
        } catch (error: any) {
            switch (error.code) {
                case 'auth/user-not-found':
                    signupWithEmail()
                    break
                case 'auth/wrong-password':
                    alert('wrong password')
                    break
                case 'auth/invalid-email':
                    alert('invalid email')
                    break
                case 'auth/invalid-credential':
                    alert('invalid credential')
                    break
                default:
                    alert(error.message)
                    break
            }
        } finally {
            setLoading(false)
        }
    }

    const signupWithEmail = async () => {
        setLoading(true)
        try {
            const result = await createUserWithEmailAndPassword(firebaseService.auth, email, password)
            alert('success')
            console.log(result)
        } catch (error: any) {
            console.error('sinupWithEmail: ', error.message)
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    const signinAndSignupWithGoogle = async () => {
        setLoading(true)
        try {
            const provider = new GoogleAuthProvider()
            signInWithRedirect(firebaseService.auth, provider)
        } catch (error: any) {
            console.error('sinupWithEmail: ', error.message)
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                style={styles.inputField}
            />
            <TextInput
                value={password}
                secureTextEntry={true}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                style={styles.inputField}
            />
            <TouchableOpacity style={[styles.btnOutline, { backgroundColor: 'red' }]} onPress={signinWithEmail}>
                <Text style={styles.btnOutlineText}>Sigin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnText]} onPress={signupWithEmail}>
                <Text style={styles.btnText2}>Create Account</Text>
            </TouchableOpacity>

            <Text style={styles.seperator}>or</Text>

            <TouchableOpacity style={styles.btnOutline}>
                <Ionicons name="md-call-outline" size={24} style={styles.btnIcon} />
                <Text style={styles.btnOutlineText}>Continue with Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline} onPress={signinAndSignupWithGoogle}>
                <Ionicons name="md-logo-google" size={24} style={styles.btnIcon} />
                <Text style={styles.btnOutlineText}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    btnIcon: {
        position: 'absolute',
        left: 16,
    },
    btnOutlineText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnOutline: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.grey,
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 30,
    },
    seperator: {
        color: Colors.grey,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    btnText: {
        color: Colors.primary,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    btnText2: {
        color: '#4457EB',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
})

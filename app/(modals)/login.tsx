import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

enum Strategy {
    Google = 'oauth_google',
    Apple = 'oauth_apple',
    Facebook = 'oauth_facebook',
}

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSelectAuth = (strategy: Strategy) => {
        console.log(strategy)
    }
    return (
        <View style={styles.container}>
            <TextInput autoCapitalize="none" placeholder="Email" style={styles.inputField} />
            <TextInput autoCapitalize="none" placeholder="Password" style={styles.inputField} />
            <TouchableOpacity style={[styles.btnOutline, { backgroundColor: 'red' }]}>
                <Text style={[styles.btnOutlineText, { color: '#fff' }]}>Sigin Or Signup</Text>
            </TouchableOpacity>
            <Text style={styles.seperator}>or</Text>

            <TouchableOpacity style={styles.btnOutline}>
                <Ionicons name="md-call-outline" size={24} style={styles.btnIcon} />
                <Text style={styles.btnOutlineText}>Continue with Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
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
})

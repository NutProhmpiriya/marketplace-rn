import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import colors from 'utils/styles/colors'

const SigInWithEmail = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const onSignInWithEmail = async () => {
        setLoading(true)
        try {
            alert('success')
            // console.log(result)
        } catch (error: any) {
            console.error('signinWithEmail: ', error)
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <View>
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
            <TouchableOpacity style={[styles.btnOutline, { backgroundColor: 'red' }]} onPress={onSignInWithEmail}>
                <Text style={styles.btnOutlineText}>Sigin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnText]} onPress={SigInWithEmail}>
                <Text style={styles.btnText2}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SigInWithEmail

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
        borderColor: colors.grey,
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
        color: colors.grey,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    btnText: {
        color: colors.primary,
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

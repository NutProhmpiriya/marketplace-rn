import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmailSignup from './EmailSignup'

const SiginSection = () => {
    return (
        <View style={styles.container}>
            <EmailSignup />
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
})

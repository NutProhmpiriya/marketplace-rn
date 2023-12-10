import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HomePage = () => {
    return (
        <View>
            <Text>HomePage</Text>
            <Link style={{ margin: 10 }} href={'/(modals)/login'}>
                Go to Login
            </Link>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({})

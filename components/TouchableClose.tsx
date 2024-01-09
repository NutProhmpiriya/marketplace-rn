import { BackHandler, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const TouchableClose = () => {
    const router = useRouter()

    return (
        <TouchableOpacity onPress={() => (router.canGoBack() ? router.back() : BackHandler.exitApp())}>
            <Ionicons name="close-outline" size={28} />
        </TouchableOpacity>
    )
}

export default TouchableClose

const styles = StyleSheet.create({})

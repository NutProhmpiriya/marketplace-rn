import { StyleSheet, View } from 'react-native'
import React from 'react'
import BaseProps from '@/types/BaseProps'
import { Text } from '@gluestack-ui/themed'

const TextWrap = ({ children }: BaseProps) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default TextWrap

const styles = StyleSheet.create({
    text: {
        flex: 1,
        flexWrap: 'wrap',
        marginBottom: 20,
    },
})

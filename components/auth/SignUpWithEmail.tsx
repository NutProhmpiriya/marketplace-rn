import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import firebaseService from 'utils/firebaseConfig'

const SignUpWithEmail = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)
    const signupWithEmail = async () => {
        setLoading(true)
        try {
            // const result = await createUserWithEmailAndPassword(firebaseService.auth, email, password)
            alert('success')
            // console.log(result)
        } catch (error: any) {
            console.error('sinupWithEmail: ', error.message)
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }
  return (
    <View>
      <Text>SignUpWithEmail</Text>
    </View>
  )
}

export default SignUpWithEmail

const styles = StyleSheet.create({})
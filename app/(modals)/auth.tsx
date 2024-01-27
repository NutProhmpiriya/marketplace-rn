import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SigninSection from '@/components/auth/SigninSection'
import SignupSection from '@/components/auth/SignupSection'

type AuthSection = 'signin' | 'signup' | 'forgot'

const auth = () => {
    const [currentSection, setCurrentSection] = useState<AuthSection>('signin')
    return (
        <View style={styles.container}>
            {currentSection === 'signin' && <SigninSection setCurrentSection={setCurrentSection} />}
            {currentSection === 'signup' && <SignupSection />}
            {/* {currentSection === 'forgot' && <SigninSection />} */}
        </View>
    )
}

export default auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

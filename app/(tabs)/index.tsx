import { StyleSheet, View, Text } from 'react-native'
import GoogleAuth from '@/components/auth/GoogleAuthBtn'
import useUserStore from '@/stores/userStores'
import EmailSignup from '@/components/auth/EmailSignup'
import SignoutBtn from '@/components/auth/SignoutBtn'

export default function TabOneScreen() {
    const { user } = useUserStore()
    return (
        <View style={styles.container}>
            <EmailSignup />
            <Text style={styles.title}> Or</Text>
            <GoogleAuth />
            <SignoutBtn />
            {user && <Text>{JSON.stringify(user, null, 2)}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})

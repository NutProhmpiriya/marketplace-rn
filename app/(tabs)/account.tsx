import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useUserStore from '@/stores/userStores'
import NotLogin from '@/components/auth/NotLogin'
import SignoutBtn from '@/components/auth/SignoutBtn'
import { Avatar, AvatarFallbackText, AvatarImage, Heading } from '@gluestack-ui/themed'

const AccountPage = () => {
    const { user } = useUserStore()
    if (!user) {
        return (
            <View style={styles.container}>
                <NotLogin />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Avatar style={{ height: 96, width: 96 }}>
                <AvatarFallbackText>{user.displayName}</AvatarFallbackText>
                {user.photoURL && <AvatarImage source={{ uri: user?.photoURL }} alt={user.displayName || ''} />}
            </Avatar>
            <Heading size="lg" style={{ marginTop: 20 }}>
                {user.displayName}
            </Heading>
            <SignoutBtn />
        </View>
    )
}

export default AccountPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

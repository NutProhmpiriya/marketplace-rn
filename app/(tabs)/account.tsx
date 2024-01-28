import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useUserStore from '@/stores/userStores'
import NotLogin from '@/components/auth/NotLogin'
import SignoutBtn from '@/components/auth/SignoutBtn'
import { Avatar, AvatarFallbackText, AvatarImage, Heading } from '@gluestack-ui/themed'
import OrderList from '@/components/order/OrderList'

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
        <ScrollView>
            <View style={styles.container}>
                <Avatar style={{ height: 96, width: 96 }}>
                    <AvatarFallbackText>{user.displayName}</AvatarFallbackText>
                    {user.photoURL && <AvatarImage source={{ uri: user?.photoURL }} alt={user.displayName || ''} />}
                </Avatar>
                <Heading size="lg" style={{ marginTop: 20 }}>
                    {user.displayName}
                </Heading>
                <SignoutBtn />
                <OrderList />
            </View>
        </ScrollView>
    )
}

export default AccountPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        width: '100%',
    },
})

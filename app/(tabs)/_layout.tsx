import React from 'react'
import { Tabs } from 'expo-router'
import Colors from 'utils/styles/colors'
import { Ionicons } from '@expo/vector-icons'
import { Badge, View, BadgeText, styled } from '@gluestack-ui/themed'
import useCartStore from 'stores/cartStore'

interface TabBarIcon {
    color: string
    size: number
}

const TabLayout = () => {
    const { cart } = useCartStore()
    const totalCart = cart.reduce((total, item) => total + item.quantity, 0)
    const listTab = [
        {
            name: 'index',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }: TabBarIcon) => <Ionicons name="home" size={size} color={color} />,
        },
        {
            name: 'cart',
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }: TabBarIcon) => (
                <View>
                    <Badge
                        h={22}
                        w={22}
                        bg="$red600"
                        borderRadius="$full"
                        mb={-18}
                        mr={-14}
                        zIndex={1}
                        variant="solid"
                        alignSelf="flex-end"
                    >
                        <BadgeText color="$white">{totalCart}</BadgeText>
                    </Badge>
                    <Ionicons name="cart-outline" size={size} color={color} />
                </View>
            ),
        },
        {
            name: 'notification',
            tabBarLabel: 'notification',
            tabBarIcon: ({ color, size }: TabBarIcon) => (
                <Ionicons name="notifications-outline" size={size} color={color} />
            ),
        },
        {
            name: 'account',
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }: TabBarIcon) => (
                <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
        },
    ]
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarLabelStyle: {},
            }}
        >
            {listTab.map((tab, index) => {
                const { name, tabBarLabel, tabBarIcon } = tab
                return (
                    <Tabs.Screen
                        key={name + index}
                        name={name}
                        options={{
                            tabBarLabel,
                            tabBarIcon,
                            headerTitleAlign: 'center',
                            headerTitle: tabBarLabel,
                        }}
                    />
                )
            })}
        </Tabs>
    )
}

export default TabLayout

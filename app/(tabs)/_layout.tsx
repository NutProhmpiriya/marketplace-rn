import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/utils/styles/colors'
import { Ionicons } from '@expo/vector-icons'
import CartBadge from '@/components/cart/CartBadge'

interface TabBarIcon {
    color: string
    size: number
}

const TabLayout = () => {
    const listTab = [
        {
            name: 'index',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }: TabBarIcon) => <Ionicons name="home" size={size} color={color} />,
        },
        {
            name: 'cart',
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }: TabBarIcon) => <CartBadge color={color} size={size} />,
        },
        {
            name: 'notification',
            tabBarLabel: 'Notification',
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

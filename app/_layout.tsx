import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import useUserStore from '@/stores/userStores'
import auth from '@react-native-firebase/auth'
import TouchableClose from '@/components/common/TouchableClose'

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    })

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error
    }, [error])

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return <RootLayoutNav />
}

function RootLayoutNav() {
    const [initializing, setInitializing] = useState(true)
    const { setUser } = useUserStore()

    const onAuthStateChanged = (user: any) => {
        try {
            if (!user) return
            setUser({
                uuid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                phoneNumber: user.phoneNumber,
            })

            if (initializing) setInitializing(false)
        } catch (error: any) {
            console.error('onAuthStateChanged', error.message)
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber // unsubscribe on unmount
    }, [])

    return (
        <GluestackUIProvider config={config}>
            <Stack>
                <Stack.Screen
                    name="(modals)/auth"
                    options={{
                        presentation: 'modal',
                        headerTitleAlign: 'center',
                        headerRight: TouchableClose,
                        headerTitle: 'Signin Or Signup',
                    }}
                />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </GluestackUIProvider>
    )
}

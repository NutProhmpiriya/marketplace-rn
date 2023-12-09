import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { withLayoutContext } from 'expo-router'

const { Navigator } = createStackNavigator()

// This can be used like `<JsStack />`
// @ts-ignore
export const JsStack = withLayoutContext<StackNavigationOptions, typeof Navigator>(Navigator)

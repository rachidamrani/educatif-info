import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen'

const Stack = createNativeStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return <Navigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

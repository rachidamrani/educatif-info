import { StatusBar } from 'expo-status-bar'
import LoginScreen from './screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen'

import AuthContextProvider, { AuthContext } from './auth-context/auth'
import { useContext } from 'react'

const Stack = createNativeStackNavigator()

function Navigation() {
  const authCtx = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerTitle: 'Centre Educatif Info',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{
            animation: 'slide_from_right',
            headerTitle: 'Tableau de bord',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
      <StatusBar style='light' backgroundColor='black' />
    </AuthContextProvider>
  )
}

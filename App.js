import { StatusBar } from 'expo-status-bar'
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
    <>
      <Navigation />
      <StatusBar style='light' backgroundColor='black' />
    </>
  )
}

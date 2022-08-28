import { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import LoginScreen from './screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashBoardScreen from './screens/DashBoardScreen'
import Profile from './screens/ProfileScreen'
import AuthContextProvider, { AuthContext } from './store/auth-context'

import { Provider as PaperProvider } from 'react-native-paper'

import RegistrationScreen from './screens/RegistrationScreen'
import AdherentsList from './screens/AdherentsList'

import { Provider } from 'react-redux'
import { store } from './store/adherents'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
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
    </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen
        name='DashBoardScreen'
        component={DashBoardScreen}
        options={{
          headerTitle: 'Tableau de bord',
        }}
      />
      <Stack.Screen
        name='RegistrationScreen'
        component={RegistrationScreen}
        options={{
          headerTitle: 'Inscription',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name='ProfileScreen'
        component={Profile}
        options={{
          headerTitle: 'Profile',
          animation: 'fade_from_bottom',
        }}
      />
      <Stack.Screen
        name='AdherentsList'
        component={AdherentsList}
        options={{
          headerTitle: 'List des adhérants',
          animation: 'fade_from_bottom',
        }}
      />
    </Stack.Navigator>
  )
}

function Navigation() {
  const authCtx = useContext(AuthContext)

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PaperProvider>
          <StatusBar style='light' backgroundColor='black' />
          <Navigation />
        </PaperProvider>
      </AuthContextProvider>
    </Provider>
  )
}

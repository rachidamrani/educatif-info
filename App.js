import { useCallback, useContext, useEffect, useState } from 'react'
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

import { Provider, useSelector } from 'react-redux'
import { store } from './store/adherents'
import LyceeScreen from './screens/LyceeScreen'
import CollegeScreen from './screens/CollegeScreen'
import PrimaireScreen from './screens/PrimaireScreen'

import { NativeBaseProvider } from 'native-base'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0074D9',
        },
        headerTintColor: '#fff',
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

// Render this component when user is connected
function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0074D9',
        },
        headerTintColor: '#fff',
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
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name='RegistrationScreen'
        component={RegistrationScreen}
        options={{
          headerTitle: 'Inscription',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name='ProfileScreen'
        component={Profile}
        options={{
          headerTitle: 'Profile',
          animation: 'flip',
        }}
      />
      <Stack.Screen
        name='AdherentsList'
        component={AdherentsList}
        options={{
          headerTitle: 'Liste des adhérents',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name='LyceeScreen'
        component={LyceeScreen}
        options={{
          headerTitle: 'Liste des lycéens',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name='CollegeScreen'
        component={CollegeScreen}
        options={{
          headerTitle: 'Liste des collégiens',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name='PrimaireScreen'
        component={PrimaireScreen}
        options={{
          headerTitle: 'Liste des écoliers',
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  )
}

function Navigation() {
  const authCtx = useContext(AuthContext)

  const { adherentsList } = useSelector((state) => state.adherents)

  console.log(adherentsList)

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    primaryFont: require('./assets/fonts/OpenSans-Regular.ttf'),
    primaryFontBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <NativeBaseProvider>
          <PaperProvider>
            <StatusBar style='light' backgroundColor='black' />
            <Navigation />
          </PaperProvider>
        </NativeBaseProvider>
      </AuthContextProvider>
    </Provider>
  )
}

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

import UpdateProfileScreen from './screens/UpdateProfileScreen'

import { Provider } from 'react-redux'
import { store } from './store/adherents'
import LyceeScreen from './screens/LyceeScreen'
import CollegeScreen from './screens/CollegeScreen'
import PrimaireScreen from './screens/PrimaireScreen'

import { NativeBaseProvider } from 'native-base'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { updateStoredState } from './store/adherents/adherentSlice'

const Stack = createNativeStackNavigator()

store.subscribe(async () => {
  await AsyncStorage.setItem('appState', JSON.stringify(store.getState()))
})

async function getSoredData() {
  const json = await AsyncStorage.getItem('appState')
  const parsedState = JSON.parse(json)
  const { adherentsList, totalRevenue } = parsedState.adherents
  store.dispatch(updateStoredState({ adherentsList, totalRevenue }))
}

getSoredData()

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
          animation: 'fade_from_bottom',
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
      <Stack.Screen
        name='UpdateProfileScreen'
        component={UpdateProfileScreen}
        options={{
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
            <StatusBar style='light' backgroundColor='#0074D9' />
            <Navigation />
          </PaperProvider>
        </NativeBaseProvider>
      </AuthContextProvider>
    </Provider>
  )
}

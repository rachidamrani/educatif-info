import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'

import { AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../auth-context/auth'

const WelcomeScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext)

  function logout() {
    authCtx.logout()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign name='logout' size={24} color='black' onPress={logout} />
      ),
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

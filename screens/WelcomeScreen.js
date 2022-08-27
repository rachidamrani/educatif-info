import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { AntDesign } from '@expo/vector-icons'

const WelcomeScreen = ({ navigation }) => {
  function logout() {
    console.log('loging you out ...')
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

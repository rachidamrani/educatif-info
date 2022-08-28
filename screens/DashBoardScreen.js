import { StyleSheet, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'

import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../store/auth-context'

import { Text, Button } from 'react-native-paper'

const DashBoardScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext)

  function logout() {
    authCtx.logout()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name='exit-outline'
          size={24}
          color='black'
          onPress={logout}
        />
      ),
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        La liste des adhérants est vide pour le moment
      </Text>
      <Button
        mode='contained-tonal'
        onPress={() => navigation.navigate('RegistrationScreen')}
        buttonColor='#3B71F3'
        textColor='#fff'
      >
        Nouveau adhérant
      </Button>
    </View>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  info: {
    marginVertical: 20,
  },
})

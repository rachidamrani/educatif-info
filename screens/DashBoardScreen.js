import { StyleSheet, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'

import { AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../auth-context/auth'

import { Text, Button } from 'react-native-paper'

const DashBoardScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext)

  function logout() {
    authCtx.logout()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AntDesign name='logout' size={24} onPress={logout} />,
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        La liste des adhérants est vide pour le moment
      </Text>
      <Button
        mode='contained-tonal'
        onPress={() => navigation.navigate('Registration')}
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

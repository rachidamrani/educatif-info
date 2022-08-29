import React, { useContext, useLayoutEffect } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text, Button, Chip, Badge, Divider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../store/auth-context'

import { useSelector } from 'react-redux'
import Levels from '../components/Levels'

const DashBoardScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext)

  const { adherents } = useSelector((state) => state)

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
      <View style={styles.infos}>
        <Chip
          icon='information'
          style={{ flexBasis: '92%' }}
          onPress={() => {
            navigation.navigate('AdherentsList')
          }}
        >
          <Text style={{ fontSize: 17 }}>Nombre des adhérants</Text>
        </Chip>
        <View style={{ alignSelf: 'center' }}>
          <Badge size={27}>{adherents.length}</Badge>
        </View>
      </View>

      <Button
        mode='contained-tonal'
        onPress={() => navigation.navigate('RegistrationScreen')}
        buttonColor='#3B71F3'
        textColor='#fff'
      >
        Nouveau Adhérant
      </Button>

      <View style={{ alignItems: 'center' }}>
        <Text variant='headlineMedium' style={styles.levels}>
          Niveaux Scolaires
        </Text>
        <Levels />
      </View>
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
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '98%',
  },
  levels: {
    marginTop: 20,
    marginBottom: 12,
  },
})

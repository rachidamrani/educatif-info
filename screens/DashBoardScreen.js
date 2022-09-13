import React, { useContext, useLayoutEffect } from 'react'
import { Text } from 'native-base'
import { StyleSheet, View } from 'react-native'
import { Button, Chip, Badge } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../store/auth-context'

import { useSelector } from 'react-redux'
import Levels from '../components/Levels'

import ItemSeparatorView from '../components/ItemSeparatorView'

import { COLORS } from '../utils'
import LatestAdherents from '../components/LatestAdherents'

const DashBoardScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext)
  const { adherentsList } = useSelector((state) => state.adherents)

  function logout() {
    authCtx.logout()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons name='exit-outline' size={24} color='#fff' onPress={logout} />
      ),
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15, color: COLORS.darkBlue }} fontSize='4xl'>
        {' '}
        Bienvenue Mr El-Ghazi !
      </Text>
      <View style={styles.infos}>
        <Chip
          icon='information'
          style={{ flexBasis: '92%' }}
          onPress={() => {
            navigation.navigate('AdherentsList')
          }}
        >
          <Text style={{ fontSize: 17 }}>Nombre total des adhérants</Text>
        </Chip>
        <View style={{ alignSelf: 'center' }}>
          <Badge size={27}>{adherentsList.length}</Badge>
        </View>
      </View>
      <Levels />
      <Button
        mode='contained-tonal'
        onPress={() => navigation.navigate('RegistrationScreen')}
        buttonColor='#0074D9'
        textColor='#fff'
        icon='plus'
        style={styles.addBtn}
      >
        Nouveau Adhérant
      </Button>
      <ItemSeparatorView />
      <Text marginTop={2} marginBottom={2}>
        Adhérant récemment ajoutés
      </Text>
      <LatestAdherents edit={false} />
    </View>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '98%',
  },
  levels: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  latestItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    marginTop: 20,
    marginBottom: 20,
  },
})

import React, { useContext, useLayoutEffect } from 'react'
import { Divider, Text } from 'native-base'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Button, Chip, Badge } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../store/auth-context'

import { useSelector } from 'react-redux'
import Levels from '../components/Levels'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { COLORS } from '../utils'
import LatestAdherents from '../components/LatestAdherents'
import EmptyList from '../components/EmptyList'

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
      <Text
        style={{
          marginBottom: 15,
          color: COLORS.darkBlue,
          fontFamily: 'primaryFontBold',
        }}
        fontSize='3xl'
      >
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
          <Text style={{ fontSize: 17, fontFamily: 'primaryFont' }}>
            Nombre total des adhérents
          </Text>
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
        <Text style={{ fontFamily: 'primaryFontBold', color: 'white' }}>
          Nouveau adhérent
        </Text>
      </Button>
      <Divider />

      {adherentsList.length > 0 ? (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name='update'
              size={24}
              color='black'
              style={{ marginRight: 8 }}
            />
            <Text
              marginTop={4}
              marginBottom={4}
              fontSize='xl'
              fontFamily={`primaryFontBold`}
            >
              Adhérents récemment ajoutés
            </Text>
          </View>
          <LatestAdherents edit={false} limit={6} />
        </>
      ) : (
        <EmptyList message='La list des adhérent est vide ! ' />
      )}
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

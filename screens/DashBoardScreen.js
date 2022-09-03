import React, { useContext, useLayoutEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Text, Button, Chip, Badge } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../store/auth-context'

import Divider from '../components/Divider'
import { useSelector } from 'react-redux'
import Levels from '../components/Levels'
import AdherentItem from '../components/AdherentItem'
import Search from '../components/Search'

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
          <Text style={{ fontSize: 17 }}>Nombre total des adhérants</Text>
        </Chip>
        <View style={{ alignSelf: 'center' }}>
          <Badge size={27}>{adherents.length}</Badge>
        </View>
      </View>

      <Search />

      <Button
        mode='contained-tonal'
        onPress={() => navigation.navigate('RegistrationScreen')}
        buttonColor='#3B71F3'
        textColor='#fff'
        icon='plus'
        style={styles.addBtn}
      >
        Nouveau Adhérant
      </Button>
      <Divider />

      <View style={{ alignItems: 'center' }}>
        <Text variant='headlineMedium' style={styles.levels}>
          Catégories
        </Text>
        <Levels />
      </View>

      <Divider />

      <View style={{ alignItems: 'center' }}>
        <Text variant='headlineSmall' style={{ marginBottom: 15 }}>
          Adhérants récemment inscrits
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.latestItems}
        data={adherents.slice().reverse().slice(0, 10)}
        renderItem={({ item }) => <AdherentItem key={item.id} item={item} />}
      ></FlatList>
    </View>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 20,
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
    // marginBottom: 10,
    marginTop: 5,
  },
})

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Dimensions } from 'react-native'
import { COLORS } from '../utils'

const AdherentItem = ({ item }) => {
  const navigation = useNavigation()

  const handleNavigationToProfil = () => {
    navigation.navigate('ProfileScreen', {
      profileId: item.id,
    })
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed ? styles.pressedBtn : null]}
      onPress={handleNavigationToProfil}
    >
      <Text style={styles.itemText}>{`${item.fullname}`}</Text>
      <Text>{new Date(item.registrationDate).toLocaleDateString()}</Text>
    </Pressable>
  )
}

export default AdherentItem

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.light,
    width: Dimensions.get('window').width * 0.953,
    borderColor: COLORS.lightblue,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressedBtn: {
    opacity: 0.7,
  },
  itemText: {
    fontWeight: 'bold',
  },
})

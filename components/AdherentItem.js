import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text } from 'react-native'

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
      <Text style={styles.itemText}>{item.firstname}</Text>
      <Text>{item.registrationDate}</Text>
    </Pressable>
  )
}

export default AdherentItem

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F4F1F1',
    width: 360,
    maxWidth: 380,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressedBtn: {
    opacity: 0.8,
  },
  itemText: {
    fontWeight: 'bold',
  },
})

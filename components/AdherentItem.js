import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Dimensions } from 'react-native'

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
      <Text style={styles.itemText}>
        {`${item.firstname} ${item.lastname}`}
      </Text>
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
    backgroundColor: '#7FDBFF',
    width: Dimensions.get('window').width * 0.93,
    borderColor: '#0074D9',
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

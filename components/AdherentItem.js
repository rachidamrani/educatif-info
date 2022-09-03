import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AdherentItem = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed ? styles.pressedBtn : null]}
      onPress={() => console.log('Pressed!')}
    >
      <Text
        style={styles.itemText}
      >{`${item.firstname} ${item.lastname}`}</Text>
    </Pressable>
  )
}

export default AdherentItem

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e8e8e8',
    width: 340,
    maxWidth: 380,
    borderBottomColor: 'gray',
    marginBottom: 5,
    borderRadius: 5,
  },
  pressedBtn: {
    opacity: 0.8,
  },
  itemText: {
    fontWeight: 'bold',
  },
})

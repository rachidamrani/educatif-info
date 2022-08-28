import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({ children, customStyles }) => {
  return <View style={[styles.card, { ...customStyles }]}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowRadius: 5,
  },
})

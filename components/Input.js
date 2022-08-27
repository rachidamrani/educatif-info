import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({ config }) => {
  return (
    <View style={styles.container}>
      <TextInput {...config} style={styles.input} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 9,
  },
  input: {
    borderColor: '#e8e8e8',
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 17,
  },
})

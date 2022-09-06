import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const Button = ({ title, onClick }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnContainer,
        pressed && styles.pressedBtn,
      ]}
      onPress={onClick}
    >
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#0074D9',
    padding: 12,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  pressedBtn: {
    backgroundColor: '#0d4adb',
  },
})

import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const Button = () => {
  function handleSignIn() {}

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnContainer,
        pressed && styles.pressedBtn,
      ]}
      onPress={handleSignIn}
    >
      <Text style={styles.btnText}>Se connecter</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#3B71F3',
    padding: 12,
    borderRadius: 10,
    width: '100%',
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

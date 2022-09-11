import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const LyceeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LyceeScreen</Text>
    </View>
  )
}

export default LyceeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

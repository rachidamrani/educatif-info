import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrimaireScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PrimaireScreen</Text>
    </View>
  )
}

export default PrimaireScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

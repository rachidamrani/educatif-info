import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CollegeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CollegeScreen</Text>
    </View>
  )
}

export default CollegeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

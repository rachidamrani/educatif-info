import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const LyceeScreen = () => {
  const { adherents } = useSelector((state) => state)

  return (
    <View>
      <Text>LyceeScreen</Text>
    </View>
  )
}

export default LyceeScreen

const styles = StyleSheet.create({})

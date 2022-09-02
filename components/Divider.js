import { StyleSheet, View } from 'react-native'
import React from 'react'

const Divider = () => <View style={styles.divider} />

export default Divider

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
    height: 1,
    width: '100%',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
})

import { StyleSheet, View } from 'react-native'
import React from 'react'

const ItemSeparatorView = () => <View style={styles.divider} />

export default ItemSeparatorView

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
})

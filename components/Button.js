import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import React from 'react'
import { COLORS } from '../utils'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Button = ({ title, iconName, onPress = () => {}, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btn, style]}
      onPress={onPress}
    >
      <Icon
        name={iconName}
        size={24}
        style={{ marginRight: 8, color: COLORS.white }}
      />
      <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 18 }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default Button

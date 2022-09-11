import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../utils'

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hidePassword, setHidePassword] = useState(password)

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 24, color: COLORS.darkBlue, marginRight: 10 }}
        />
        <TextInput
          secureTextEntry={hidePassword}
          style={{ color: COLORS.darkBlue, flex: 1 }}
          autoCorrect={false}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}
          placeholder={props.placeholder}
          {...props}
        />
        {password && (
          <Icon
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            style={{ fontSize: 24, color: COLORS.darkBlue, marginLeft: 10 }}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && (
        <Text style={{ color: COLORS.red, fontSize: 12 }}>{error}</Text>
      )}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    marginRight: 5,
    fontSize: 16,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 6,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 5,
  },
})

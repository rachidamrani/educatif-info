import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { RadioButton } from 'react-native-paper'
import { COLORS } from '../utils'

const RadioButtonsGroup = ({ onChangeRadioBtn, value }) => {
  return (
    <>
      <Text
        style={{
          marginRight: 5,
          fontSize: 16,
          color: COLORS.grey,
        }}
      >
        Responsable
      </Text>
      <RadioButton.Group onValueChange={onChangeRadioBtn} value={value}>
        <View style={styles.radioBtns}>
          {/* Create a reusabel component  */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value='Père'
              uncheckedColor={COLORS.darkBlue}
              status='checked'
            />
            <Text>Père</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value='Mère' uncheckedColor={COLORS.darkBlue} />
            <Text>Mère</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value='Autre' uncheckedColor={COLORS.darkBlue} />
            <Text>Autre</Text>
          </View>
        </View>
      </RadioButton.Group>
    </>
  )
}

export default RadioButtonsGroup

const styles = StyleSheet.create({
  radioBtns: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
})

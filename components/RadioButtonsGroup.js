import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { COLORS } from '../utils'

const RadioButtonsGroup = ({ onChangeRadioBtn }) => {
  const [checked, setChecked] = useState()
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

      <View style={styles.radioBtns}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            uncheckedColor={COLORS.darkBlue}
            value='Père'
            status={checked === 'Père' ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked('Père')
              onChangeRadioBtn('Père')
            }}
          />
          <Text>Père</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            uncheckedColor={COLORS.darkBlue}
            value='Mère'
            status={checked === 'Mère' ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked('Mère')
              onChangeRadioBtn('Mère')
            }}
          />
          <Text>Mère</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            uncheckedColor={COLORS.darkBlue}
            value='Autre'
            status={checked === 'Autre' ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked('Autre')
              onChangeRadioBtn('Autre')
            }}
          />
          <Text>Autre</Text>
        </View>
      </View>
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

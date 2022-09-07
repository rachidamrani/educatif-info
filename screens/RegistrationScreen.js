import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Keyboard,
} from 'react-native'
import { v4 as getRandomId } from 'uuid'
import 'react-native-get-random-values'
import { COLORS, isValid, validatedate } from '../utils'
import Input from '../components/Input'

import Button from '../components/Button'
import { useState } from 'react'
import { RadioButton } from 'react-native-paper'

const Registration = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullname: '',
    level: '',
    birthday: '',
    phone: '',
    responsible: '',
  })

  const [errors, setErrors] = useState({})

  function validate() {
    Keyboard.dismiss()
    let valid = true

    if (!isValid(inputs.fullname, 'fullname')) {
      handleError(
        'Le nom complet doit contenir au moins 5 charactères',
        'fullname'
      )
      valid = false
    }

    if (!isValid(inputs.phone, 'phone')) {
      handleError(
        'Veuillez saisir un numéro de téléphone sous la forme : 0x-xx-xx-xx-xx',
        'phone'
      )
      valid = false
    }

    if (valid) {
      console.log('goo')
    }
  }

  function handleOnChange(text, input) {
    setInputs((prev) => ({
      ...prev,
      [input]: text,
    }))
  }

  function handleError(errorMessage, input) {
    setErrors((prev) => ({
      ...prev,
      [input]: errorMessage,
    }))
  }

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 30,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: COLORS.black,
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Nouveau Adhérant
      </Text>
      <View style={{ marginTop: 20 }}>
        <Input
          label='Nom et prénom'
          error={errors.fullname}
          onFocus={() => {
            handleError(null, 'fullname')
          }}
          iconName='account'
          placeholder='Entrer le nom et le prénom'
          value={inputs.fullname}
          onChangeText={(text) => handleOnChange(text, 'fullname')}
        />
        <Input
          label='Niveau'
          iconName='school'
          error={errors.level}
          onFocus={() => {
            handleError(null, 'level')
          }}
          placeholder='Entrer le niveau'
          value={inputs.level}
          onChangeText={(text) => handleOnChange(text, 'level')}
        />
        <Input
          label='Date de naissance'
          iconName='cake-layered'
          placeholder='Entrer la date de naissance'
          error={errors.birthday}
          onFocus={() => {
            handleError(null, 'birthday')
          }}
          value={inputs.birthday}
          onChangeText={(text) => handleOnChange(text, 'birthday')}
        />

        <Text
          style={{
            marginRight: 5,
            fontSize: 16,
            color: COLORS.grey,
          }}
        >
          Responsable
        </Text>
        <View>
          <RadioButton.Group onValueChange={() => {}}>
            <View style={styles.radioBtns}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton value='Père' status='checked' />
                <Text>Père</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton value='Père' />
                <Text>Mère</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton value='Père' />
                <Text>Frère</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton value='Père' />
                <Text>Autre</Text>
              </View>
            </View>
          </RadioButton.Group>
          <Input
            label='Téléphone'
            keyboardType='numeric'
            iconName='phone'
            placeholder='Entrer le téléphone du responsable'
            error={errors.phone}
            onFocus={() => {
              handleError(null, 'phone')
            }}
            value={inputs.phone}
            onChangeText={(text) => handleOnChange(text, 'phone')}
          />
        </View>

        <Button
          title='Ajouter'
          style={{ borderRadius: 5, marginTop: 5 }}
          iconName='account-plus'
          onPress={validate}
        />
      </View>
    </ScrollView>
  )
}

const styles = {
  radioBtns: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
}

export default Registration

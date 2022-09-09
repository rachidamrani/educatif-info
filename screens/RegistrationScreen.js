import { useState } from 'react'
import { ScrollView, View, Text, Keyboard, Alert } from 'react-native'

import { COLORS, isValid, validatedate } from '../utils'
import Input from '../components/Input'

import Button from '../components/Button'
import RadioButtonsGroup from '../components/RadioButtonsGroup'
import LevelsDropdown from '../components/LevelsDropdown'

import { useDispatch } from 'react-redux'

import { v4 as getRandomId } from 'uuid'
import 'react-native-get-random-values'

import { addNewAdherent } from '../store/adherents/adherentSlice'

const Registration = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullname: '',
    level: '',
    birthday: '',
    phone: '',
    responsible: '',
  })
  const [respRadioBtnValue, setRadioBtnValue] = useState()
  const [respError, setRespError] = useState(false)

  const [level, setLevel] = useState()
  const [levelError, setLevelError] = useState(false)

  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()

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

    if (!isValid(inputs.birthday, 'birthday')) {
      handleError(
        'Veuillez saisir la date de naissance sous la forme (jj/dd/aa)',
        'birthday'
      )

      valid = false
    }

    if (!respRadioBtnValue) {
      setRespError(true)
      valid = false
    }

    if (!level) {
      setLevelError(true)
      valid = false
    }

    if (valid) {
      // Dispatch action
      const adherentId = getRandomId()
      const newAdherent = {
        fullname: inputs.fullname,
        level: level,
        birthday: inputs.birthday,
        phone: inputs.phone,
        responsible: respRadioBtnValue,
        registrationDate: new Date().toUTCString(),
        id: adherentId,
      }

      dispatch(addNewAdherent(newAdherent))
      navigation.replace('ProfileScreen', {
        profileId: adherentId,
      })
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
          fontSize: 25,
          fontWeight: 'bold',
        }}
      >
        Nouveau Adhérant
      </Text>
      <View style={{ marginTop: 20 }}>
        {/* Fullname field  */}
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
        {/* Level field */}
        <LevelsDropdown onSetLevel={setLevel} />
        {levelError && !level && (
          <Text style={{ color: COLORS.red, fontSize: 12, marginBottom: 8 }}>
            Veuillez choisir le niveau de l'adhérant
          </Text>
        )}
        {/* Birthday field */}
        <Input
          label='Date de naissance'
          iconName='cake-layered'
          placeholder='Entrer la date de naissance (jj/dd/aa)'
          error={errors.birthday}
          onFocus={() => {
            handleError(null, 'birthday')
          }}
          value={inputs.birthday}
          onChangeText={(text) => handleOnChange(text, 'birthday')}
        />
        {/* Responsible field */}
        <RadioButtonsGroup onChangeRadioBtn={setRadioBtnValue} />

        {respError && !respRadioBtnValue && (
          <Text style={{ color: COLORS.red, fontSize: 12, marginBottom: 8 }}>
            Veuillez choisir un responsable
          </Text>
        )}

        {/* Phone field  */}
        <View>
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
        {/* Submit button */}
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

export default Registration

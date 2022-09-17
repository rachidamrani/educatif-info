import { useState } from 'react'
import { ScrollView, View, Keyboard } from 'react-native'
import { Text } from 'native-base'

import { COLORS, isValid } from '../utils'
import Input from '../components/Input'

import RadioButtonsGroup from '../components/RadioButtonsGroup'
import LevelsDropdown from '../components/LevelsDropdown'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { useDispatch } from 'react-redux'

import { Button } from 'native-base'

import { v4 as getRandomId } from 'uuid'
import 'react-native-get-random-values'

import { addNewAdherent } from '../store/adherents/adherentSlice'

import { Ionicons } from '@expo/vector-icons'

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

  const [birthdayDate, setBirthdayDate] = useState()
  const [birthdayDateError, setBirthdayDateError] = useState(false)

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    setBirthdayDate(date)
    hideDatePicker()
  }

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
        'Veuillez saisir un numéro de téléphone : 0x-xx-xx-xx-xx',
        'phone'
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

    if (!birthdayDate) {
      setBirthdayDateError(true)
      valid = false
    }

    if (valid) {
      // Dispatch action
      const adherentId = getRandomId()
      const newAdherent = {
        fullname: inputs.fullname,
        level: level,
        birthday: birthdayDate.toLocaleDateString(),
        phone: inputs.phone,
        responsible: respRadioBtnValue,
        registrationDate: new Date().toLocaleDateString(),
        id: adherentId,
        paiment: {
          Septembre: false,
          Octobre: false,
          Novembre: false,
          Décembre: false,
          Janvier: false,
          Février: false,
          Mars: false,
          Avril: false,
          Mai: false,
          Juin: false,
        },
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
      <Text fontSize={25} fontFamily='primaryFontBold' textAlign='center'>
        Ajouter un nouveau adhérent{' '}
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
          autoCapitalize='words'
          onChangeText={(text) => handleOnChange(text, 'fullname')}
        />
        {/* Level field */}
        <LevelsDropdown onSetLevel={setLevel} />
        {levelError && !level && (
          <Text
            style={{
              color: COLORS.red,
              fontSize: 12,
              marginBottom: 8,
              fontFamily: 'primaryFontBold',
            }}
          >
            Veuillez choisir le niveau de l'adhérent
          </Text>
        )}
        {/* Birthday field */}
        <Text
          style={{
            marginRight: 5,
            fontSize: 16,
            color: COLORS.grey,
            marginBottom: 10,
            fontFamily: 'primaryFontBold',
          }}
        >
          Date de naissance :{' '}
          <Text color='blue.300'>
            {birthdayDate ? new Date(birthdayDate).toLocaleDateString() : null}
          </Text>
        </Text>
        <View style={{ marginBottom: 10 }}>
          <Button
            colorScheme='lightBlue'
            alignSelf='center'
            onPress={showDatePicker}
            leftIcon={<Ionicons name='person-add' size={18} color='white' />}
            size='sm'
            _text={{
              fontSize: 16,
              fontFamily: 'primaryFontBold',
            }}
          >
            Choisir une date de naissance
          </Button>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode='date'
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display='default'
          />
        </View>

        {birthdayDateError && !birthdayDate && (
          <Text
            style={{
              color: COLORS.red,
              fontSize: 12,
              marginBottom: 8,
              fontFamily: 'primaryFontBold',
            }}
          >
            La date de naissance de l'adhérent est requise
          </Text>
        )}

        {/* Responsible field */}
        <RadioButtonsGroup onChangeRadioBtn={setRadioBtnValue} />

        {respError && !respRadioBtnValue && (
          <Text
            style={{
              color: COLORS.red,
              fontSize: 12,
              marginBottom: 8,
              fontFamily: 'primaryFontBold',
            }}
          >
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
          colorScheme='green'
          alignSelf='center'
          onPress={validate}
          leftIcon={<Ionicons name='person-add' size={16} color='white' />}
          size='sm'
          width='1/4'
          _text={{
            fontSize: 15,
            fontFamily: 'primaryFontBold',
          }}
        >
          Ajouter
        </Button>
      </View>
    </ScrollView>
  )
}

export default Registration

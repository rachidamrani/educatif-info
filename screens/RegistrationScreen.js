import { useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { v4 as getRandomId } from 'uuid'
import 'react-native-get-random-values'

import { addNewAdherent } from '../store/adherents/adherentSlice'
import { validatePhone } from '../utils'

const Registration = ({ navigation }) => {
  const [values, setInputValues] = useState({
    firstname: 'Rachid',
    lastname: '',
    level: '',
    responsible: '',
    dateOfBirth: '',
    phone: '0666911974',
  })

  const dispatch = useDispatch()

  function handleSubmit() {
    const newAdherent = {
      firstname: values.firstname,
      lastname: values.lastname,
      level: values.level,
      responsible: values.responsible,
      dateOfBirth: values.dateOfBirth,
      phone: values.phone,
      registrationDate: Date(),
    }

    if (validatePhone(values.phone)) {
      dispatch(
        addNewAdherent({
          ...newAdherent,
          id: getRandomId(),
        })
      )
      navigation.navigate('ProfileScreen')
    } else {
      Alert.alert('Attention', 'Numéro de téléphone incorrect !')
    }
  }

  function handleChange(name, value) {
    setInputValues((prevInputs) => ({
      ...prevInputs,
      [name]: [value],
    }))
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.titleContainer}>
        <Text variant='titleLarge' style={styles.title}>
          Nouveau adhérant
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          label='Nom'
          onChangeText={(firstname) => handleChange('firstname', firstname)}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
          value={values.firstname}
        />
        <TextInput
          label='Prénom'
          onChangeText={(lastname) => handleChange('lastname', lastname)}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
          value={values.lastname}
        />
        <TextInput
          label='Niveau'
          onChangeText={(level) => handleChange('level', level)}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
          value={values.level}
        />
        <TextInput
          label='Responsable légal'
          onChangeText={(responsible) =>
            handleChange('responsible', responsible)
          }
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
          value={values.responsible}
        />
        <TextInput
          label='Date de naissane'
          onChangeText={(dateOfBirth) =>
            handleChange('dateOfBirth', dateOfBirth)
          }
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
          value={values.dateOfBirth}
        />

        <TextInput
          label='Téléphone'
          onChangeText={(phone) => handleChange('phone', phone)}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
          keyboardType='name-phone-pad'
          value={values.phone}
        />
        <Button
          icon='account-plus'
          mode='contained-tonal'
          onPress={handleSubmit}
          buttonColor='#3B71F3'
          textColor='#fff'
          style={styles.submitBtn}
        >
          Ajouter
        </Button>
      </View>
    </ScrollView>
  )
}

export default Registration

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputsContainer: {
    paddingTop: 10,
    width: '89%',
  },
  input: {
    marginBottom: 10,
  },
  submitBtn: {
    marginTop: 6,
  },
})

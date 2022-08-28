import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import {
  addNewAdherent,
  removeAdherent,
} from '../store/adherents/adherentSlice'

const Registration = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text variant='titleLarge' style={styles.title}>
          Nouveau adhérant
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          label='Nom'
          onChangeText={() => {}}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
        />
        <TextInput
          label='Prénom'
          onChangeText={() => {}}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
        />
        <TextInput
          label='Niveau'
          onChangeText={() => {}}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
        />
        <TextInput
          label='Responsable légal'
          onChangeText={() => {}}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
        />
        <TextInput
          label='Date de naissane'
          onChangeText={() => {}}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
        />

        <TextInput
          label='Téléphone'
          onChangeText={() => {}}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
          keyboardType='number-pad'
        />
        <TextInput
          label="Date d'inscription"
          onChangeText={() => {}}
          autoFocus={false}
          mode='outlined'
          selectionColor='#e8e8e8'
          outlineColor='black'
          activeOutlineColor='dodgerblue'
          style={styles.input}
        />

        <Button
          icon='account-plus'
          mode='contained-tonal'
          onPress={() => navigation.navigate('Profile')}
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

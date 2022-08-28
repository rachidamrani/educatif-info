import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

const Registration = () => {
  return (
    <View style={styles.container}>
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
          onPress={() => console.log('Pressed')}
          buttonColor='#3B71F3'
          textColor='#fff'
        >
          Ajouter
        </Button>
      </View>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})

import { useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import InfoRow from '../components/InfoRow'
import { Button, Card } from 'react-native-paper'

const Profile = ({ navigation }) => {
  const route = useRoute()
  const { adherents } = useSelector((state) => state)
  const profileId = route.params.profileId

  const adherent = adherents.find((item) => item.id === profileId)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Profile de ${adherent.firstname} ${adherent.lastname} `,
    })
  }, [adherent, navigation])

  return (
    <View style={styles.container}>
      <Card style={styles.cardProfile}>
        <InfoRow
          label='Nom Complet'
          info={`${adherent.firstname} ${adherent.lastname}`}
        />
        <InfoRow label='Niveau' info={adherent.level} />
        <InfoRow label='Date de naissance' info={adherent.dateOfBirth} />
        <InfoRow label='Résponsable légal' info={adherent.responsible} />
        <InfoRow label="Date d'inscription" info={adherent.registrationDate} />
        <InfoRow label='Téléphone' info={adherent.phone} />

        <View style={styles.controls}>
          <Button
            icon='account-edit'
            mode='contained'
            onPress={() => console.log('Pressed')}
            buttonColor='green'
          >
            Modifier
          </Button>
          <Button
            icon='account-remove'
            mode='contained'
            onPress={() => console.log('Pressed')}
            buttonColor='red'
          >
            Supprimer
          </Button>
        </View>
      </Card>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 22,
    marginTop: 10,
  },
  cardProfile: {
    padding: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
})

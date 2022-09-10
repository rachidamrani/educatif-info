import { useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import {
  Alert,
  StyleSheet,
  Image,
  View,
  useWindowDimensions,
  ToastAndroid,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import InfoRow from '../components/InfoRow'
import { Button, Card, Text } from 'react-native-paper'
import { removeAdherent } from '../store/adherents/adherentSlice'

import notfound from '../assets/notfound.jpg'

const Profile = ({ navigation }) => {
  const route = useRoute()
  const dispatch = useDispatch()
  const { adherents } = useSelector((state) => state)
  const profileId = route.params.profileId

  const adherent = adherents.find((item) => item.id === profileId)

  const { height } = useWindowDimensions()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: adherent
        ? `Profile de ${adherent.fullname}`
        : `Adhérant supprimé !`,
    })
  }, [adherent, navigation])

  function handleRemoveProfile() {
    Alert.alert(
      'Attention',
      `Vous êtes sur le point de supprimer l'adhérant ${
        adherent.fullname.split(' ')[0]
      }, êtes-vous sûr ?`,
      [
        {
          text: 'Non',
          style: 'cancel',
        },
        {
          text: 'Oui',
          onPress: () => {
            dispatch(removeAdherent(profileId))
            ToastAndroid.showWithGravityAndOffset(
              'Supprimé avec succés',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            )
          },
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      {adherent ? (
        <Card style={styles.cardProfile}>
          <InfoRow label='Nom Complet' info={`${adherent.fullname}`} />
          <InfoRow label='Niveau' info={adherent.level} />
          <InfoRow label='Date de naissance' info={adherent.birthday} />
          <InfoRow label='Responsable légal' info={adherent.responsible} />
          <InfoRow
            label="Date d'inscription"
            info={new Date(adherent.registrationDate).toLocaleDateString()}
          />
          <InfoRow label='Téléphone' info={adherent.phone} />

          <View style={styles.controls}>
            <Button
              icon='account-edit'
              mode='contained-tonal'
              onPress={() => console.log('Pressed')}
              textColor='#fff'
              buttonColor='blue'
            >
              Modifier
            </Button>
            <Button
              icon='account-remove'
              mode='contained-tonal'
              textColor='#fff'
              onPress={handleRemoveProfile}
              buttonColor='red'
            >
              Supprimer
            </Button>
          </View>
        </Card>
      ) : (
        <View style={styles.notFound}>
          <Image
            source={notfound}
            resizeMode='contain'
            style={[styles.logo, { height: height * 0.4 }]}
          />
          <View style={{ width: 250, alignSelf: 'center' }}>
            <Button
              icon='home'
              mode='contained'
              textColor='#fff'
              onPress={() => navigation.replace('DashBoardScreen')}
            >
              Retour au tableau de board
            </Button>
          </View>
        </View>
      )}
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
    marginVertical: 15,
  },
  logo: {
    width: '100%',
    marginBottom: 20,
  },
  notFound: {
    justifyContent: 'center',
    flex: 1,
    padding: 32,
    marginBottom: 50,
  },
})

import { useLayoutEffect, useState } from 'react'
import { View, StyleSheet, Alert, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Box, Button, Divider, Spinner } from 'native-base'
import { Text } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'

import Icon from '../components/Icon'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import PaimentSection from '../components/PaimentSection'
import { removeAdherent } from '../store/adherents/adherentSlice'

import deleted from '../assets/deleted.jpg'

const ProfileScreen = ({ navigation }) => {
  const route = useRoute()
  const dispatch = useDispatch()
  const [isDeleting, setIsDeleting] = useState(false)

  const { adherentsList } = useSelector((state) => state.adherents)
  const id = route.params.profileId

  const adherentFound = adherentsList.find((adherent) => adherent.id === id)

  function handleRemoveAdherent() {
    setIsDeleting(true)
    setTimeout(() => {
      dispatch(removeAdherent(adherentFound.id))
      setIsDeleting(false)
    }, 800)
  }

  useLayoutEffect(() => {
    if (!adherentFound) {
      navigation.navigate('DashBoardScreen')
    }
    navigation.setOptions({
      headerTitle: !adherentFound
        ? 'Ce profile est peut être supprimé'
        : `Profile de ${adherentFound.fullname.split(' ')[0]}`,
    })
  }, [navigation])

  if (isDeleting) {
    return (
      <Box flex={1} justifyContent='center'>
        <Spinner size='lg' />
      </Box>
    )
  }

  if (!adherentFound) {
    return (
      <Box justifyContent='center' alignItems='center' flex={1}>
        <Text fontSize='xl' marginY={5} fontFamily='primaryFontBold'>
          Cet adhérent n'existe plus !
        </Text>
        <Image
          source={deleted}
          style={{
            width: 180,
            height: 180,
            marginVertical: 5,
            borderRadius: 50,
          }}
          alt='deleted'
        />

        <Button
          variant='outline'
          marginTop={4}
          onPress={() => navigation.popToTop('DashBoardScreen')}
        >
          <Text fontFamily={`primaryFontBold`}>Retour au tableau de bord</Text>
        </Button>
      </Box>
    )
  }

  return (
    <Box alignItems='center' flex={1} padding={4}>
      <Box
        justifyContent='center'
        bgColor='indigo.200'
        w='100%'
        alignItems='center'
        borderRadius={5}
        style={styles.headLabel}
      >
        <Text fontFamily={`primaryFontBold`} fontSize={20} padding={2}>
          Informations de l'adhérent
        </Text>
      </Box>

      <Divider marginTop={2} marginBottom={2} />
      {/* Full name  */}
      <View style={styles.infoStyle}>
        <Icon name='account' materialIcon={true} />
        <Text fontSize={17} color='darkBlue.600' fontFamily={`primaryFontBold`}>
          Nom et prénom :{' '}
        </Text>
        <Text fontSize={17} fontFamily={`primaryFontBold`}>
          {adherentFound.fullname}
        </Text>
      </View>
      {/* Level  */}
      <View style={styles.infoStyle}>
        <Icon name='school' materialIcon={true} />
        <Text
          fontSize={17}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Niveau :{' '}
        </Text>
        <Text fontSize={17} alignSelf='center' fontFamily={`primaryFontBold`}>
          {adherentFound.level}
        </Text>
      </View>
      {/* Birthday */}
      <View style={styles.infoStyle}>
        <Icon name='baby' materialIcon={true} />
        <Text
          fontSize={17}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Date de naissance :{' '}
        </Text>
        <Text fontSize={17} alignSelf='center' fontFamily={`primaryFontBold`}>
          {adherentFound.birthday}
        </Text>
      </View>
      {/* Responsible  */}
      <View style={styles.infoStyle}>
        <Icon name='human-male-child' materialIcon={true} />
        <Text
          fontSize={17}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Responsable :{' '}
        </Text>
        <Text fontSize={17} alignSelf='center' fontFamily={`primaryFontBold`}>
          {adherentFound.responsible}
        </Text>
      </View>
      {/* Phone  */}
      <View style={styles.infoStyle}>
        <Icon name='phone' materialIcon={true} />
        <Text
          fontSize={17}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Télépone :{' '}
        </Text>
        <Text fontSize={17} alignSelf='center' fontFamily={`primaryFontBold`}>
          {adherentFound.phone}
        </Text>
      </View>
      {/* Registration Date  */}
      <View style={styles.infoStyle}>
        <Icon name='calendar-month' materialIcon={true} />
        <Text
          fontSize={17}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Date d'inscription :{' '}
        </Text>
        <Text fontSize={17} alignSelf='center' fontFamily={`primaryFontBold`}>
          {adherentFound.registrationDate}
        </Text>
      </View>

      <Divider marginTop={2} marginBottom={2} />

      <Box
        justifyContent='center'
        bgColor='indigo.200'
        w='100%'
        alignItems='center'
        borderRadius={5}
        style={styles.headLabel}
        marginTop={2}
      >
        <Text fontFamily={`primaryFontBold`} fontSize={20} padding={2}>
          Status des paiments
        </Text>
      </Box>

      {/* Paiment Section */}
      <PaimentSection adherent={adherentFound} />

      <Divider marginBottom={2} />
      <View style={styles.btnControls}>
        <Button
          size='lg'
          colorScheme='darkBlue'
          leftIcon={
            <MaterialCommunityIcons
              name='delete-alert'
              size={24}
              color='white'
            />
          }
          width='50%'
          onPress={() => {
            Alert.alert(
              'Attention !',
              'Vous êtes sur le point de supprimer cet adhérent! Voulez-vous continuer ?',
              [
                {
                  text: 'Non',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Oui',
                  onPress: () => handleRemoveAdherent(),
                },
              ]
            )
          }}
        >
          <Text fontFamily={`primaryFontBold`} color='#fff'>
            Supprimer
          </Text>
        </Button>
        <Button
          size='lg'
          colorScheme='coolGray'
          leftIcon={
            <MaterialCommunityIcons
              name='account-edit-outline'
              size={24}
              color='white'
            />
          }
          marginLeft={5}
          width='50%'
        >
          <Text fontFamily={`primaryFontBold`} color='#fff'>
            Modifier
          </Text>
        </Button>
      </View>
    </Box>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  infoStyle: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#f3f3f3',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 4,
  },
  iconStyle: {
    marginRight: 5,
  },
  btnControls: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
  },
  headLabel: {
    elevation: 3,
  },
})

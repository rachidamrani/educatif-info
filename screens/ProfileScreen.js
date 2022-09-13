import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Box, Button, Text, Icon as NativeBaseIcon } from 'native-base'
import { useSelector } from 'react-redux'

import Icon from '../components/Icon'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const ProfileScreen = ({ navigation }) => {
  const route = useRoute()
  const { adherentsList } = useSelector((state) => state.adherents)
  const id = route.params.profileId

  const adherentFound = adherentsList.find((adherent) => adherent.id === id)

  if (!adherentFound) {
    return (
      <Box justifyContent='center' alignItems='center' flex={1}>
        <Text fontSize='xl'>Cet adhérant est inexistant!</Text>
      </Box>
    )
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Profile de ${adherentFound.fullname.split(' ')[0]}`,
    })
  }, [id])

  return (
    <Box alignItems='center' flex={1} padding={4}>
      {/* Full name  */}
      <View style={styles.infoStyle}>
        <Icon name='user-alt' />
        <Text fontSize={18} color='darkBlue.600' fontFamily={`primaryFontBold`}>
          Nom et prénom :{' '}
        </Text>
        <Text fontSize={18} fontFamily={`primaryFont`}>
          {adherentFound.fullname}
        </Text>
      </View>
      {/* Level  */}
      <View style={styles.infoStyle}>
        <Icon name='school' />
        <Text
          fontSize={18}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Niveau :{' '}
        </Text>
        <Text fontSize={18} alignSelf='center' fontFamily={`primaryFont`}>
          {adherentFound.level}
        </Text>
      </View>
      {/* Birthday */}
      <View style={styles.infoStyle}>
        <Icon name='birthday-cake' />
        <Text
          fontSize={18}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Date de naissance :{' '}
        </Text>
        <Text fontSize={18} alignSelf='center' fontFamily={`primaryFont`}>
          {adherentFound.birthday}
        </Text>
      </View>
      {/* Responsible  */}
      <View style={styles.infoStyle}>
        <Icon name='human-male-child' materialIcon={true} />
        <Text
          fontSize={18}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Responsable :{' '}
        </Text>
        <Text fontSize={18} alignSelf='center' fontFamily={`primaryFont`}>
          {adherentFound.responsible}
        </Text>
      </View>
      {/* Phone  */}
      <View style={styles.infoStyle}>
        <Icon name='phone-volume' />
        <Text
          fontSize={18}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Télépone :{' '}
        </Text>
        <Text fontSize={18} alignSelf='center' fontFamily={`primaryFont`}>
          {adherentFound.phone}
        </Text>
      </View>
      {/* Registration Date  */}
      <View style={styles.infoStyle}>
        <Icon name='calendar-month' materialIcon={true} />

        <Text
          fontSize={18}
          color='darkBlue.600'
          alignSelf='center'
          fontFamily={`primaryFontBold`}
        >
          Date d'inscription :{' '}
        </Text>
        <Text fontSize={18} alignSelf='center' fontFamily={`primaryFont`}>
          {adherentFound.registrationDate}
        </Text>
      </View>

      <View style={styles.btnControls}>
        <Button
          size='lg'
          colorScheme='success'
          leftIcon={
            <MaterialCommunityIcons
              name='delete-alert'
              size={24}
              color='white'
            />
          }
          width='50%'
        >
          <Text fontFamily={`primaryFontBold`} color='#fff'>
            Supprimer
          </Text>
        </Button>
        <Button
          size='lg'
          colorScheme='danger'
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
})

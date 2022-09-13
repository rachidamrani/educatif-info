import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Box, Text } from 'native-base'
import { useSelector } from 'react-redux'

import { FontAwesome5 } from '@expo/vector-icons'
import Icon from '../components/Icon'

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
    <Box alignItems='center' flex={1} padding={3}>
      {/* Full name  */}
      <View style={styles.infoStyle}>
        <Icon name='user-alt' />
        <Text fontSize={20} color='darkBlue.600'>
          Nom et prénom :{' '}
        </Text>
        <Text fontSize={20}>{adherentFound.fullname}</Text>
      </View>
      {/* Level  */}
      <View style={styles.infoStyle}>
        <Icon name='school' />
        <Text fontSize={20} color='darkBlue.600' alignSelf='center'>
          Niveau :{' '}
        </Text>
        <Text fontSize={20} alignSelf='center'>
          {adherentFound.level}
        </Text>
      </View>
      {/* Birthday */}
      <View style={styles.infoStyle}>
        <Icon name='birthday-cake' />
        <Text fontSize={20} color='darkBlue.600' alignSelf='center'>
          Date de naissance :{' '}
        </Text>
        <Text fontSize={20} alignSelf='center'>
          {adherentFound.birthday}
        </Text>
      </View>
      {/* Responsible  */}
      <View style={styles.infoStyle}>
        <Icon name='human-male-child' materialIcon={true} />
        <Text fontSize={20} color='darkBlue.600' alignSelf='center'>
          Responsable :{' '}
        </Text>
        <Text fontSize={20} alignSelf='center'>
          {adherentFound.responsible}
        </Text>
      </View>
      {/* Phone  */}
      <View style={styles.infoStyle}>
        <Icon name='phone-volume' />
        <Text fontSize={20} color='darkBlue.600' alignSelf='center'>
          Télépone :{' '}
        </Text>
        <Text fontSize={20} alignSelf='center'>
          {adherentFound.phone}
        </Text>
      </View>
      {/* Registration Date  */}
      <View style={styles.infoStyle}>
        <Icon name='calendar-month' materialIcon={true} />

        <Text fontSize={20} color='darkBlue.600' alignSelf='center'>
          Date d'inscription :{' '}
        </Text>
        <Text fontSize={20} alignSelf='center'>
          {adherentFound.registrationDate}
        </Text>
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
    backgroundColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  iconStyle: {
    marginRight: 5,
  },
})

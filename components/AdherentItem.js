import { StyleSheet, Text, Dimensions, View, Pressable } from 'react-native'
import { COLORS, getFormattedDate } from '../utils'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'native-base'

const AdherentItem = ({ adherent, control }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.itmeContainer}>
      <Pressable
        style={styles.item}
        android_ripple={{ color: COLORS.grey }}
        onLongPress={() =>
          navigation.navigate('ProfileScreen', {
            profileId: adherent.id,
          })
        }
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5 name='user-graduate' size={14} color='black' />
          <Text style={styles.fullname}>{adherent.fullname}</Text>
        </View>
        {control && (
          <View style={styles.controls}>
            {/* <Pressable
              style={({ pressed }) => pressed && styles.pressedBtn}
              onPress={() => console.log('edit')}
            >
              <FontAwesome5 name='user-edit' size={22} color='green' />
            </Pressable> */}
            <Button
              variant='link'
              marginRight={-2}
              size='xs'
              colorScheme='coolGray'
              _text={{
                fontSize: 11,
              }}
              onPress={() =>
                navigation.navigate('UpdateProfileScreen', {
                  adherentId: adherent.id,
                })
              }
            >
              Modifier
            </Button>
          </View>
        )}
        {!control && (
          <View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'primaryFontBold',
              }}
            >
              {getFormattedDate(adherent.registrationDate)}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  )
}

export default AdherentItem

const styles = StyleSheet.create({
  itmeContainer: {
    overflow: 'hidden',
    borderRadius: 3,
  },
  item: {
    backgroundColor: COLORS.light,
    height: 32,
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.lightblue,
  },
  pressedBtn: {
    opacity: 0.6,
  },
  controls: {
    flexDirection: 'row',
  },
  fullname: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'primaryFontBold',
  },
})

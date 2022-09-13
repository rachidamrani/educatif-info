import { StyleSheet, Text, Dimensions, View, Pressable } from 'react-native'
import { COLORS } from '../utils'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

import { useDispatch } from 'react-redux'
import { removeAdherent } from '../store/adherents/adherentSlice'

const AdherentItem = ({ adherent, control }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <View style={styles.itmeContainer}>
      <Pressable
        style={styles.item}
        android_ripple={{ color: COLORS.grey }}
        onLongPress={() => navigation.navigate('ProfileScreen')}
      >
        <Text style={styles.fullname}>{adherent.fullname}</Text>
        {control && (
          <View style={styles.controls}>
            <Pressable
              style={({ pressed }) => pressed && styles.pressedBtn}
              onPress={() => console.log('edit')}
            >
              <FontAwesome5 name='user-edit' size={22} color='green' />
            </Pressable>
            <Pressable
              style={({ pressed }) => pressed && [styles.pressedBtn]}
              onPress={() => dispatch(removeAdherent(adherent.id))}
            >
              <FontAwesome5
                name='trash'
                size={22}
                color='red'
                style={{ marginLeft: 8 }}
              />
            </Pressable>
          </View>
        )}
        {!control && (
          <View>
            <Text style={{ fontSize: 16 }}>{adherent.registrationDate}</Text>
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
    borderRadius: 8,
  },
  item: {
    backgroundColor: COLORS.light,
    height: 45,
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  pressedBtn: {
    opacity: 0.6,
  },
  controls: {
    flexDirection: 'row',
  },
  fullname: {
    fontSize: 16,
    fontWeight: '500',
  },
})

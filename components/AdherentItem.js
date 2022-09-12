import { StyleSheet, Text, Dimensions, View, Pressable } from 'react-native'
import { COLORS } from '../utils'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const AdherentItem = ({ adherent }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.fullname}>{adherent.fullname}</Text>
      <View style={styles.controls}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressedBtn}
          onPress={() => console.log('ok')}
        >
          <FontAwesome5 name='user-edit' size={20} color='green' />
        </Pressable>
        <Pressable
          style={({ pressed }) => pressed && [styles.pressedBtn]}
          onPress={() => console.log('ok')}
        >
          <FontAwesome5
            name='trash'
            size={20}
            color='red'
            style={{ marginLeft: 5 }}
          />
        </Pressable>
      </View>
    </View>
  )
}

export default AdherentItem

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.light,
    height: 40,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
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

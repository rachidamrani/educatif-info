import { View } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../utils'

const Icon = ({ name, materialIcon }) => {
  return (
    <View style={{ marginRight: 8, alignSelf: 'center' }}>
      {materialIcon ? (
        <MaterialCommunityIcons name={name} size={24} color={COLORS.blue} />
      ) : (
        <FontAwesome5 name={name} size={20} color={COLORS.blue} />
      )}
    </View>
  )
}

export default Icon

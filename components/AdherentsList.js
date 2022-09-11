import { Input, Box, Text } from 'native-base'
import Icon from '@expo/vector-icons/Ionicons'
import { Keyboard } from 'react-native'

const AdherentsList = () => {
  return (
    <Box alignItems='center' paddingTop='5' flex={1}>
      <Input
        w='90%'
        bgColor='lightBlue.100'
        borderColor='lightBlue.300'
        focusOutlineColor='darkBlue.500'
        borderWidth='1'
        placeholder='Trouver un adhérant'
        InputLeftElement={
          <Icon name='search' size={24} style={{ paddingLeft: 10 }} />
        }
        fontSize='md'
        fontWeight='bold'
      />
    </Box>
  )
}

export default AdherentsList

import { Box, Image, Text } from 'native-base'

import empty from '../assets/empty.png'

function EmptyList({ message }) {
  return (
    <Box alignItems='center' justifyContent='center' flex={1}>
      <Image
        source={empty}
        style={{
          width: 180,
          height: 180,
        }}
        alt='empty-list'
      />
      <Text fontSize='xl' fontFamily={`primaryFontBold`}>
        {message}
      </Text>
    </Box>
  )
}

export default EmptyList

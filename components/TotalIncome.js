import { StyleSheet } from 'react-native'
import { Text, Box } from 'native-base'
import React from 'react'

const TotalIncome = () => {
  return (
    <Box style={styles.container} backgroundColor='lightBlue.100'>
      <Text fontSize={17} color='teal.800' fontFamily='primaryFontBold'>
        Total Revenue :{' '}
      </Text>
      <Text
        fontSize={17}
        color='teal.800'
        style={{ marginLeft: 'auto', fontFamily: 'primaryFontBold' }}
      >
        1250 DH{' '}
      </Text>
    </Box>
  )
}

export default TotalIncome

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderTopColor: 'lightblue',
    borderTopWidth: 1,
    // borderTopRightRadius: 15,
    // borderTopLeftRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 8,
    shadowOffset: { width: 0, height: 2 },
  },
})

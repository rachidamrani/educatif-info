import { StyleSheet } from 'react-native'
import { Text, Box } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'

const TotalIncome = () => {
  const { totalRevenue } = useSelector((state) => state.adherents)

  return (
    <Box style={styles.container} backgroundColor='lightBlue.100'>
      <Text fontSize={17} color='teal.800' fontFamily='primaryFontBold'>
        Revenu Total :{' '}
      </Text>
      <Text
        fontSize={17}
        color='teal.800'
        style={{
          marginLeft: 'auto',
          fontFamily: 'primaryFontBold',
        }}
      >
        {parseFloat(totalRevenue).toFixed(2)} DH
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
    height: 35,
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

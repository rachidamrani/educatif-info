import { Alert, Pressable, StyleSheet } from 'react-native'
import { Text, Box } from 'native-base'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetCounterToZero } from '../store/adherents/adherentSlice'

const TotalIncome = () => {
  const { totalRevenue } = useSelector((state) => state.adherents)

  const dispatch = useDispatch()

  function resetRevenuCounter() {
    Alert.alert(
      'Confirmer',
      'Voulez vous remettre le compteur des revenus à zéro ?',
      [
        {
          text: 'Non',
          style: 'cancel',
        },
        { text: 'Oui', onPress: () => dispatch(resetCounterToZero()) },
      ]
    )
  }

  return (
    <Pressable onLongPress={resetRevenuCounter}>
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
    </Pressable>
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

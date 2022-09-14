import { Pressable, StyleSheet, View } from 'react-native'

import { Text } from 'native-base'

import React from 'react'
import { Box } from 'native-base'
import { months } from '../utils'

import { adherentHasPayed } from '../store/adherents/adherentSlice'
import { useDispatch } from 'react-redux'

const PaimentSection = ({ adherent }) => {
  const dispatch = useDispatch()

  const adherentId = adherent.id

  function handlePaiment(month) {
    dispatch(adherentHasPayed({ adherentId, month }))
  }

  return (
    <Box
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      marginY={5}
    >
      {months.map((month) => (
        <Pressable
          key={month}
          style={({ pressed }) => [pressed && styles.pressedBtn]}
          onPress={() => handlePaiment(month)}
        >
          <Box
            style={styles.monthItem}
            marginX={3}
            backgroundColor={!adherent.paiment[month] ? 'red.500' : 'green.500'}
          >
            <Text color='#fff' fontFamily='primaryFontBold'>
              {month}
            </Text>
          </Box>
        </Pressable>
      ))}
    </Box>
  )
}

export default PaimentSection

const styles = StyleSheet.create({
  monthItem: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 100,
  },
  pressedBtn: {
    opacity: 0.9,
  },
})

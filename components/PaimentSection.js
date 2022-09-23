import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet } from 'react-native'
import {
  Text,
  Box,
  Modal,
  Input,
  Center,
  FormControl,
  Button,
} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'

import { pay } from '../store/adherents/adherentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { months } from '../utils'

const PaimentSection = ({ adherent }) => {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [amount, setAmount] = useState(null)
  const [month, setMonth] = useState('')

  function handlePayment() {
    setShowModal(true)
  }

  function submitPayment() {
    if (!amount) {
      return Alert.alert('Attention', 'Veuillez saisir un montant valide !')
    }

    if (!isNaN(amount)) {
      dispatch(pay({ id: adherent.id, month, amount: +amount }))
      setShowModal(false)
      setAmount(null)
    } else if (!amount) {
      Alert.alert('Attention', 'Vous devriez saisir un montant !')
    } else {
      Alert.alert(
        'Attention',
        "Le montant que vous avez entré n'est pas valide !"
      )
    }
  }

  return (
    <>
      <Box
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        marginY={3}
      >
        {months.map((month) => (
          // Month label
          <Pressable
            key={month}
            style={({ pressed }) => [pressed && styles.pressedBtn]}
            onPress={() => {
              setMonth(month)
              handlePayment(month)
            }}
            disabled={adherent.paiment[month]}
          >
            <Box
              style={styles.monthItem}
              marginX={3}
              backgroundColor={
                !adherent.paiment[month] ? 'red.500' : 'green.500'
              }
            >
              <Text color='#fff' fontFamily='primaryFontBold'>
                {month}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Box>
      <Center>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          animationPreset='fade'
        >
          <Modal.Content maxWidth={227}>
            <Modal.Body>
              <FormControl>
                <FormControl.Label mb={3}>
                  <Text fontSize={18} fontFamily='primaryFontBold'>
                    Montant en dirhams :
                  </Text>
                </FormControl.Label>
                <Input
                  onChangeText={(amount) => setAmount(amount)}
                  keyboardType='numeric'
                  fontSize={20}
                  InputRightElement={
                    <FontAwesome5
                      name='money-bill-wave'
                      size={18}
                      color='black'
                      style={{ marginRight: 10 }}
                    />
                  }
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={submitPayment}>Valider</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </>
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

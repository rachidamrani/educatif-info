import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import DropDownPicker from 'react-native-dropdown-picker'
import { COLORS, dropDownLevels } from '../utils'

const LevelsDropdown = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState(dropDownLevels)

  return (
    <>
      <Text style={styles.label}>Niveau</Text>
      <DropDownPicker
        placeholder='Choisir un niveau'
        listMode='SCROLLVIEW'
        style={{ marginVertical: 10 }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </>
  )
}

export default LevelsDropdown

const styles = StyleSheet.create({
  label: {
    marginRight: 5,
    fontSize: 16,
    color: COLORS.grey,
  },
})

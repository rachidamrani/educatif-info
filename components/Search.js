import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { COLORS } from '../utils'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = () => {
    // Search functionnality
  }
  return (
    <>
      <Searchbar
        placeholder='Chercher un adhérent'
        placeholderTextColor={COLORS.grey}
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={() => console.log('ok')}
        style={styles.inputSearch}
      />
    </>
  )
}

export default Search

const styles = StyleSheet.create({
  inputSearch: {
    backgroundColor: '#fff',
    width: '98%',
    marginBottom: 15,
  },
})

import { Input, Box, FlatList, Divider, Text } from 'native-base'
import { Image, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import AdherentItem from '../components/AdherentItem'

import { useSelector, useDispatch } from 'react-redux'
import {
  filterAdherents,
  clearFilteredAdherents,
  isLookingFor,
  setIsSearchingToFalse,
} from '../store/adherents/adherentSlice'

import notfound from '../assets/notfound.png'
import EmptyList from '../components/EmptyList'
import { useEffect, useRef } from 'react'

const AdherentsList = ({ navigation }) => {
  const textInput = useRef()

  const { adherentsList, filteredAdherentsList, isSearching } = useSelector(
    (state) => state.adherents
  )

  const dispatch = useDispatch()

  function handleRenderItems({ item }) {
    return <AdherentItem adherent={item} control={true} />
  }

  useEffect(() => {
    dispatch(setIsSearchingToFalse())
  }, [navigation])

  function handleSearch(query) {
    if (query.trim() !== '') {
      dispatch(isLookingFor(true))
      const formattedText = query.toLowerCase()
      const data = adherentsList.filter((item) =>
        item.fullname.toLowerCase().includes(formattedText)
      )
      dispatch(filterAdherents(data))
    } else {
      dispatch(isLookingFor(false))
      dispatch(clearFilteredAdherents())
    }
  }

  if (adherentsList.length === 0) {
    return <EmptyList message='La liste des adhérents est vide !' />
  }

  return (
    <Box alignItems='center' paddingTop='5'>
      <Input
        ref={textInput}
        autoCapitalize='words'
        w='90%'
        marginBottom={3}
        bgColor='light.50'
        borderColor='blue.400'
        focusOutlineColor='darkBlue.600'
        borderWidth='1'
        placeholder='Trouver un adhérent'
        InputLeftElement={
          <Icon name='search' size={24} style={{ paddingLeft: 10 }} />
        }
        fontSize='md'
        fontWeight='bold'
        onChangeText={handleSearch}
      />
      <Divider marginBottom={3} />
      {!isSearching ? (
        <FlatList
          data={adherentsList.slice()}
          keyExtractor={(item) => item.id}
          renderItem={handleRenderItems}
        />
      ) : isSearching && filteredAdherentsList.length === 0 ? (
        <>
          <Text fontSize='md' fontFamily={`primaryFont`}>
            Désolé, il n'y a aucun adhérent portant ce nom
          </Text>
          <Image source={notfound} style={styles.notFound} alt='not-found' />
        </>
      ) : (
        <FlatList
          data={
            filteredAdherentsList.length > 0
              ? filteredAdherentsList.slice().reverse()
              : adherentsList.slice().reverse()
          }
          keyExtractor={(item) => item.id}
          renderItem={handleRenderItems}
        />
      )}
    </Box>
  )
}

export default AdherentsList

const styles = StyleSheet.create({
  notFound: {
    width: 180,
    height: 180,
    marginTop: 10,
  },
})

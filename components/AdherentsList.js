import { Input, Box, FlatList, Divider, Text } from 'native-base'
import Icon from '@expo/vector-icons/Ionicons'
import AdherentItem from './AdherentItem'

import { useSelector, useDispatch } from 'react-redux'
import {
  filterAdherents,
  clearFilteredAdherents,
  isLookingFor,
} from '../store/adherents/adherentSlice'

const AdherentsList = () => {
  const { adherentsList, filteredAdherentsList, isSearching } = useSelector(
    (state) => state.adherents
  )

  const dispatch = useDispatch()

  function handleRenderItems({ item }) {
    return <AdherentItem adherent={item} />
  }

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

  return (
    <>
      <Box alignItems='center' paddingTop='5'>
        <Input
          autoCapitalize='words'
          w='90%'
          marginBottom={3}
          bgColor='lightBlue.100'
          borderColor='blue.400'
          focusOutlineColor='darkBlue.600'
          borderWidth='1'
          placeholder='Trouver un adhérant'
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
            data={adherentsList.slice().reverse()}
            keyExtractor={(item) => item.id}
            renderItem={handleRenderItems}
          />
        ) : isSearching && filteredAdherentsList.length === 0 ? (
          <Text>Not found</Text>
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
    </>
  )
}

export default AdherentsList

import { FlatList } from 'native-base'
import { View } from 'native-base'
import { useSelector } from 'react-redux'
import AdherentItem from './AdherentItem'

const LatestAdherents = ({ edit }) => {
  const { adherentsList } = useSelector((state) => state.adherents)

  return (
    <FlatList
      data={adherentsList.slice().reverse().slice(0, 8)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AdherentItem adherent={item} edit={edit} />}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default LatestAdherents

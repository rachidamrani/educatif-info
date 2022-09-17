import { useSelector } from 'react-redux'
import { FlatList, Box } from 'native-base'
import AdherentItem from '../components/AdherentItem'
import EmptyList from '../components/EmptyList'

const PrimaireScreen = () => {
  const { adherentsList } = useSelector((state) => state.adherents)

  const lyceeEtudiants = adherentsList.filter(
    (adherent) =>
      adherent.level === 'TSC' ||
      adherent.level === '2BAC' ||
      adherent.level === '1BAC'
  )

  if (lyceeEtudiants.length === 0) {
    return <EmptyList message='Cette liste est vide !' />
  }

  return (
    <Box flex={1} justifyContent='center' alignItems='center' marginY={5}>
      <FlatList
        data={lyceeEtudiants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AdherentItem adherent={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}

export default PrimaireScreen

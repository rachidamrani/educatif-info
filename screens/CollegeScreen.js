import { useSelector } from 'react-redux'
import { FlatList, Box } from 'native-base'
import AdherentItem from '../components/AdherentItem'
import EmptyList from '../components/EmptyList'

const PrimaireScreen = () => {
  const { adherentsList } = useSelector((state) => state.adherents)

  const collegeEtudiants = adherentsList.filter(
    (adherent) =>
      adherent.level === '1AC' ||
      adherent.level === '2AC' ||
      adherent.level === '3AC'
  )

  if (collegeEtudiants.length === 0) {
    return <EmptyList message='Cette liste est vide !' />
  }

  return (
    <Box flex={1} justifyContent='center' alignItems='center' marginY={5}>
      <FlatList
        data={collegeEtudiants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AdherentItem adherent={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}

export default PrimaireScreen

import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { adherents } = useSelector((state) => state)
  const adherent = adherents.find(
    (item) => item.id === useRoute().params?.adherentId
  )

  return (
    <View style={styles.container}>
      <Text>Profile de {adherent.firstname} </Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

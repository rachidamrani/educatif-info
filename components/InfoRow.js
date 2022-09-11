import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../utils'
import ItemSeparatorView from './ItemSeparatorView'

const InfoRow = ({ label, info }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.labelText}>{label} : </Text>
        <Text style={styles.infoText}>{info}</Text>
      </View>
      <ItemSeparatorView />
    </>
  )
}

export default InfoRow

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 18,
    color: COLORS.darkBlue,
    fontWeight: '700',
  },
})

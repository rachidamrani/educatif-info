import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../utils'

const InfoRow = ({ label, info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label} : </Text>
      <Text style={styles.infoText}>{info}</Text>
    </View>
  )
}

export default InfoRow

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 10,
    fontSize: 25,
    color: COLORS.blue,
    fontWeight: '700',
    textAlign: 'center',
  },
})

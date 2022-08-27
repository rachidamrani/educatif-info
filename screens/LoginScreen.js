import { StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import logo from '../assets/learner.jpg'

const LoginScreen = () => {
  const { height } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        resizeMode='contain'
        style={[styles.logo, { height: height * 0.3 }]}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'gray',
  },
  logo: {
    marginVertical: 5,
  },
})

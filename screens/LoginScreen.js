import { StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import logo from '../assets/learner.jpg'
import Input from '../components/Input'

const LoginScreen = () => {
  const { height } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        resizeMode='contain'
        style={[styles.logo, { height: height * 0.4 }]}
      />
      <Input
        config={{
          placeholder: 'Email',
        }}
      />
      <Input
        config={{
          placeholder: 'Password',
          secureTextEntry: true,
        }}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  logo: {
    // marginVertical: 5,
    width: '100%',
    maxWidth: 300,
    maxHeight: 300,
  },
})

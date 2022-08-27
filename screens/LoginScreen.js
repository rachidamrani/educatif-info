import { useContext } from 'react'
import { StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import logo from '../assets/learner.jpg'
import { AuthContext } from '../auth-context/auth'
import Button from '../components/Button'
import Input from '../components/Input'

const LoginScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext)

  const { height } = useWindowDimensions()

  function handleLogin() {
    navigation.navigate('WelcomeScreen')
  }

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
          placeholder: 'Mot de passe',
          secureTextEntry: true,
        }}
      />
      <Button onClick={handleLogin} title='Se connecter' />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: 20,
  },
})

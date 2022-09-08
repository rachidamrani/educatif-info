import { useContext, useState } from 'react'
import { StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import logo from '../assets/learner.jpg'
import { AuthContext } from '../store/auth-context'
import Button from '../components/Button'
import Input from '../components/Input'

const LoginScreen = ({}) => {
  const authCtx = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('123456')

  const { height } = useWindowDimensions()

  async function handleSubmit() {
    // Validate email and password before submiting!
    setIsLoading(true)
    await authCtx.login(email, password)
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        resizeMode='contain'
        style={[styles.logo, { height: height * 0.4 }]}
      />

      <Input label='Email' iconName='email' placeholder='Entrer votre email' />
      <Input
        label='Mot de passe'
        iconName='lock'
        placeholder='Entrer votre mot de passe'
        password={true}
      />

      <Button
        onClick={handleSubmit}
        title={isLoading ? 'Connexion ...' : 'Se Connecter'}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },
})

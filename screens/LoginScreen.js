import { useContext, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import logo from '../assets/learner.jpg'
import { AuthContext } from '../store/auth-context'
import Input from '../components/Input'
import { Alert, Button, VStack, HStack, Text } from 'native-base'

const LoginScreen = ({}) => {
  const authCtx = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)
  const [connexionError, setConnexionError] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit() {
    // Validate email and password before submiting!
    setIsLoading(true)
    try {
      await authCtx.login(email, password)
    } catch (error) {
      setConnexionError(true)
      setTimeout(() => {
        setConnexionError(false)
      }, 5000)
    }
    setIsLoading(false)
  }

  function handleEmailChange(text) {
    setEmail(text)
  }

  function handlePassword(text) {
    setPassword(text)
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Erreur de connexion  */}

      {connexionError && (
        <Alert w='100%' status='error' my={3}>
          <VStack space={2} flexShrink={1} w='100%'>
            <HStack flexShrink={1} space={2} justifyContent='space-between'>
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt='1' />
                <Text fontSize='md' color='coolGray.800'>
                  Connexion échouée, veuillez vérifier votre identifiant puis
                  réessayer ...
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Alert>
      )}
      <Image source={logo} resizeMode='contain' style={styles.logo} />
      {/* Email */}
      <Input
        nput
        label='Email'
        iconName='email'
        placeholder='Entrer votre email'
        value={email}
        onChangeText={handleEmailChange}
      />
      {/* Password */}
      <Input
        label='Mot de passe'
        iconName='lock'
        placeholder='Entrer votre mot de passe'
        password={true}
        value={password}
        onChangeText={handlePassword}
      />

      {/* <Button
        onPress={handleSubmit}
        title={isLoading ? 'Connexion ...' : 'Se Connecter'}
        style={{ marginTop: 15 }}
      /> */}

      <Button
        isLoading={isLoading ? true : false}
        spinnerPlacement='end'
        isLoadingText='Connexion ...'
        onPress={handleSubmit}
        colorScheme='primary'
        size='lg'
        w='40%'
        marginBottom={5}
        _text={{
          fontFamily: 'primaryFontBold',
        }}
        alignSelf='center'
      >
        Se Connecter
      </Button>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 30,
    flex: 1,
  },
  logo: {
    width: '100%',
    width: 300,
    height: 240,
    alignSelf: 'center',
  },
})

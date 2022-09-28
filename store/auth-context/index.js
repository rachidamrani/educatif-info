import { createContext, useState } from 'react'
import { authenticate } from '../../utils'

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  login: () => {}, // just for autocompletion
  logout: () => {}, // just for autocompletion
})

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState()

  async function login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((email !== 'educatif.info@edu.com', password !== '2022@2022@')) {
          reject('Connexion échouée ! Veuillez vérifier votre identifiant.')
        } else {
          setAuthToken('connected')
          resolve('Connecté avec succés !')
        }
      }, 1000)
    })
  }

  function logout() {
    setAuthToken(null)
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    // isAuthenticated: true,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider

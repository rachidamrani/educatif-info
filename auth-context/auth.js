import { createContext, useState } from 'react'
import { authenticate } from '../utils'

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState()

  async function login(email, password) {
    const token = await authenticate(email, password)
    setAuthToken(token)
  }

  function logout() {
    setAuthToken(null)
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    login: login,
    logout: logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider

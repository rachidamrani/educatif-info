import axios from 'axios'
import { Alert } from 'react-native'

const API_KEY = 'AIzaSyCCfIROh4xuGiJ2WExOQwFiP-_VdLLert8'
const BAKCEND_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export const levels = [
  { title: 'Primaire', color: '#34568B' },
  { title: 'Collège', color: '#DD4124' },
  { title: 'Lycée', color: '#55B4B0' },
]

export async function authenticate(email, password) {
  try {
    const response = await axios.post(BAKCEND_URL, {
      email,
      password,
      returnSecureToken: true,
    })
    return response.data.idToken
  } catch (error) {
    Alert.alert(
      "Erreur d'authentification",
      'Problème de connexion !\nVeuillez vérifier vos identifiants ou bien votre connexion internet.'
    )
  }
}

export function getFormattedDate(date) {
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
}

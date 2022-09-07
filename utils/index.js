import axios from 'axios'
import { Alert } from 'react-native'

const API_KEY = 'AIzaSyCCfIROh4xuGiJ2WExOQwFiP-_VdLLert8'
const BAKCEND_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export const levels = [
  { title: 'Primaire', color: '#FF4136' },
  { title: 'Collège', color: '#FF851B' },
  { title: 'Lycée', color: '#3D9970' },
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

const patterns = {
  firstname: /^([a-z]{5,10})(\s)?([a-z]{5,10})?$/i,
  lastname: /^([a-z]{5,10})(\s)?([a-z]{5,10})?$/i,
  level: /[a-z]/i,
  responsible: /[a-z]/i,
  dateOfBirth:
    /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi,
  phone: /^0(\d\d)(\d\d)(\d\d)(\d\d)(\d)$/,
}

export function validate(string, field) {
  return patterns[field].test(string)
}

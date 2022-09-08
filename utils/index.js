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
  fullname: /^([a-z]{5,10})(\s)([a-z]{5,10})?(\s)?([a-z]{5,10})?$/i,
  level: /[a-z]/i,
  birthday:
    /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/,
  phone: /^0(\d\d)(\d\d)(\d\d)(\d\d)(\d)$/,
}

export function isValid(string, field) {
  return patterns[field].test(string)
}

export const COLORS = {
  white: '#fff',
  black: '#000',
  blue: '#5D5FEE',
  grey: '#BABBC3',
  light: '#F3F4FB',
  darkBlue: '#7978B5',
  red: 'red',
}

export const dropDownLevels = [
  { label: 'Primaire', value: 'pri' },
  { label: '6ère année', value: '6ème', parent: 'pri' },
  { label: '5ère année', value: '5ème', parent: 'pri' },
  { label: '4ère année', value: '4ème', parent: 'pri' },
  { label: '3ère année', value: '3ème', parent: 'pri' },
  { label: '2ère année', value: '2ème', parent: 'pri' },
  { label: '1ère année', value: '1ère', parent: 'pri' },

  { label: 'Collège', value: 'na' },
  { label: '3AC', value: '3AC', parent: 'na' },
  { label: '2AC', value: '2AC', parent: 'na' },
  { label: '1AC', value: '1AC', parent: 'na' },

  { label: 'Lycée', value: 'ly' },
  { label: 'TC', value: 'TSC', parent: 'ly' },
  { label: '1BAC', value: '1BACSE', parent: 'ly' },
  { label: '2BAC', value: '2BACSEC', parent: 'ly' },
]

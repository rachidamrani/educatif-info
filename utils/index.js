export const levels = [
  { title: 'Primaire', color: '#FF4136' },
  { title: 'Collège', color: '#FF851B' },
  { title: 'Lycée', color: '#3D9970' },
]

export function getFormattedDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const patterns = {
  fullname: /^([a-z]{3,12})(\s)([a-z]{3,12})?(\s)?([a-z]{3,12})?$/i,
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
  lightblue: '#87CEEB',
  grey: '#BABBC3',
  light: '#F3F4FB',
  darkBlue: '#7978B5',
  red: 'red',
}

export const dropDownLevels = [
  { label: 'Primaire', value: 'pri' },
  { label: '6ème année', value: '6P', parent: 'pri' },
  { label: '5ème année', value: '5P', parent: 'pri' },
  { label: '4ème année', value: '4P', parent: 'pri' },
  { label: '3ème année', value: '3P', parent: 'pri' },
  { label: '2ème année', value: '2P', parent: 'pri' },
  { label: '1ère année', value: '1P', parent: 'pri' },

  { label: 'Collège', value: 'na' },
  { label: '3AC', value: '3AC', parent: 'na' },
  { label: '2AC', value: '2AC', parent: 'na' },
  { label: '1AC', value: '1AC', parent: 'na' },

  { label: 'Lycée', value: 'ly' },
  { label: 'TC', value: 'TSC', parent: 'ly' },
  { label: '1BAC', value: '1BAC', parent: 'ly' },
  { label: '2BAC', value: '2BAC', parent: 'ly' },
]

export const months = [
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
]

import { createSlice } from '@reduxjs/toolkit'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: {
    adherentsList: [
      {
        birthday: '09/01/22',
        fullname: 'Rachid Amrani',
        id: '1df78afa-2437-4a91-9db8-1088ea4f3304',
        level: '2P',
        paiment: {
          Avril: false,
          Décembre: false,
          Février: false,
          Janvier: false,
          Juin: false,
          Mai: false,
          Mars: false,
          Novembre: false,
          Octobre: false,
          Septembre: false,
        },
        phone: '0666965683',
        registrationDate: '09/17/22',
        responsible: 'Père',
      },
      {
        birthday: '09/01/22',
        fullname: 'Hafsa Amrani',
        id: 'e2aca1d7-da19-4592-8901-c5c0b3ad2caf',
        level: '1AC',
        paiment: {
          Avril: false,
          Décembre: false,
          Février: false,
          Janvier: false,
          Juin: false,
          Mai: false,
          Mars: false,
          Novembre: false,
          Octobre: false,
          Septembre: false,
        },
        phone: '0655223366',
        registrationDate: '09/17/22',
        responsible: 'Mère',
      },
      {
        birthday: '09/01/22',
        fullname: 'Halima Alaoui',
        id: 'a821058e-1fe7-4a71-aac6-1c754fd6dee6',
        level: '1BAC',
        paiment: {
          Avril: false,
          Décembre: false,
          Février: true,
          Janvier: false,
          Juin: false,
          Mai: true,
          Mars: true,
          Novembre: false,
          Octobre: false,
          Septembre: false,
        },
        phone: '0652352641',
        registrationDate: '09/17/22',
        responsible: 'Père',
      },
      {
        birthday: '09/01/22',
        fullname: 'Barqouq Abdessamad',
        id: '6d900260-9e7f-458c-9fb0-69efb72ee59d',
        level: 'TSC',
        paiment: {
          Avril: false,
          Décembre: true,
          Février: false,
          Janvier: false,
          Juin: false,
          Mai: false,
          Mars: false,
          Novembre: false,
          Octobre: false,
          Septembre: true,
        },
        phone: '0633669988',
        registrationDate: '09/17/22',
        responsible: 'Père',
      },
    ],
    filteredAdherentsList: [],
    isSearching: false,
  },
  reducers: {
    addNewAdherent: (state, action) => {
      state.adherentsList.push(action.payload)
    },
    removeAdherent: (state, action) => {
      return {
        ...state,
        adherentsList: state.adherentsList.filter(
          (item) => action.payload !== item.id
        ),
      }
    },
    filterAdherents: (state, action) => {
      return {
        ...state,
        filteredAdherentsList: [...action.payload],
      }
    },
    clearFilteredAdherents: (state) => {
      return {
        ...state,
        filteredAdherents: [],
      }
    },
    isLookingFor: (state, action) => {
      return {
        ...state,
        isSearching: action.payload,
      }
    },
    adherentHasPayed: (state, action) => {
      state.adherentsList.find(
        (ad) => ad.id === action.payload.adherentId
      ).paiment[action.payload.month] = !state.adherentsList.find(
        (ad) => ad.id === action.payload.adherentId
      ).paiment[action.payload.month]

      return state
    },
    setIsSearchingToFalse: (state) => {
      return {
        ...state,
        isSearching: false,
      }
    },
  },
})

export const {
  addNewAdherent,
  removeAdherent,
  filterAdherents,
  clearFilteredAdherents,
  isLookingFor,
  setIsSearchingToFalse,
  adherentHasPayed,
} = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

import { createSlice } from '@reduxjs/toolkit'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: {
    adherentsList: [
      {
        birthday: '09/14/22',
        fullname: 'Halima Alaoui',
        id: '88f888f7-e146-470b-8c46-8b570f69ca5c',
        level: '4P',
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
        phone: '0666911974',
        registrationDate: '09/14/22',
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
  },
})

export const {
  addNewAdherent,
  removeAdherent,
  filterAdherents,
  clearFilteredAdherents,
  isLookingFor,
  adherentHasPayed,
} = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

import { createSlice } from '@reduxjs/toolkit'
import { dummyAdherents } from '../../utils'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: {
    adherentsList: dummyAdherents,
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
    updateAdherent: (state, action) => {
      const { id } = action.payload
      const updatableAdherentIndex = state.adherentsList.findIndex(
        (adherent) => adherent.id === id
      )

      state.adherentsList[updatableAdherentIndex] =
        action.payload.updatedAdherent

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
  setIsSearchingToFalse,
  adherentHasPayed,
  updateAdherent,
} = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

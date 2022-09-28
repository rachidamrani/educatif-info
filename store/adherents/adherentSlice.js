import { createSlice } from '@reduxjs/toolkit'
import { dummyAdherents } from '../../utils'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: {
    adherentsList: dummyAdherents,
    filteredAdherentsList: [],
    isSearching: false,
    totalRevenue: 0,
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
    pay: (state, action) => {
      const { amount, id, month } = action.payload
      const adherentIndex = state.adherentsList.findIndex((ad) => ad.id === id)

      if (!state.adherentsList[adherentIndex].paiment[month]) {
        state.adherentsList[adherentIndex].paiment[month] = true
        state.totalRevenue += amount
      }

      return state
    },
    resetCounterToZero: (state) => {
      return {
        ...state,
        totalRevenue: 0,
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
  updateAdherent,
  pay,
  resetCounterToZero,
} = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

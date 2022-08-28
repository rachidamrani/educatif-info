import { createSlice } from '@reduxjs/toolkit'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: [],
  reducers: {
    addNewAdherent: (state, action) => {
      console.log('addNewAdherent')
    },
    removeAdherent: (state, action) => {
      console.log('removeAdherent')
    },
  },
})

export const { addNewAdherent, removeAdherent } = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

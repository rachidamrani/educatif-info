import { createSlice } from '@reduxjs/toolkit'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: [
    {
      birthday: '06/07/90',
      fullname: 'Rachid Amrani Alaoui',
      id: '76d61f46-bcb1-45f3-914a-244857c42aba',
      level: '4P',
      phone: '0777063048',
      registrationDate: '09/10/22',
      responsible: 'Mère',
    },
  ],
  reducers: {
    addNewAdherent: (state, action) => {
      state.push(action.payload)
    },
    removeAdherent: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addNewAdherent, removeAdherent } = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

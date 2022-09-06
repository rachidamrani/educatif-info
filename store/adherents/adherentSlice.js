import { createSlice } from '@reduxjs/toolkit'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: [
    // {
    //   firstname: 'Rachid',
    //   lastname: 'Amrani',
    //   level: 'TSC',
    //   responsible: 'Père',
    //   dateOfBirth: '1991-05-05',
    //   phone: '0666911974',
    //   registrationDate: 'Sat Sep 03 2022 17:40:34 GMT+0100 (GMT+01:00)',
    //   id: '1',
    // },
    // {
    //   firstname: 'Halima',
    //   lastname: 'Alaoui',
    //   level: 'TSC',
    //   responsible: 'Mère',
    //   dateOfBirth: '1997-05-05',
    //   phone: '0666911974',
    //   registrationDate: 'Sat Sep 03 2022 17:41:16 GMT+0100 (GMT+01:00)',
    //   id: '2',
    // },
    // {
    //   firstname: 'Jalila',
    //   lastname: 'Amraoui',
    //   level: '1ér bac Scientifique',
    //   responsible: 'Père',
    //   dateOfBirth: '1995-05-05',
    //   phone: '0666911974',
    //   registrationDate: 'Sat Sep 03 2022 17:41:57 GMT+0100 (GMT+01:00)',
    //   id: '3',
    // },
    // {
    //   firstname: 'Mohamed',
    //   lastname: 'Amine',
    //   level: '1ér bac Scientifique',
    //   responsible: 'Père',
    //   dateOfBirth: '1995-05-05',
    //   phone: '0666911974',
    //   registrationDate: 'Sat Sep 03 2022 17:48:34 GMT+0100 (GMT+01:00)',
    //   id: '4',
    // },
  ],
  reducers: {
    addNewAdherent: (state, action) => {
      state.push(action.payload)
    },
    removeAdherent: (state, action) => {
      console.log('removeAdherent')
    },
  },
})

export const { addNewAdherent, removeAdherent } = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

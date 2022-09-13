import { createSlice } from '@reduxjs/toolkit'

const adherentSlice = createSlice({
  name: 'adherent',
  initialState: {
    adherentsList: [
      {
        birthday: '06/07/90',
        fullname: 'Rachid Amrani Alaoui',
        id: '76d61f46-bcb1-45f3-914a-244857c42aba',
        level: '4P',
        phone: '0777063048',
        registrationDate: '09/10/22',
        responsible: 'Mère',
      },
      {
        birthday: '06/07/90',
        fullname: 'Halima Alaoui',
        id: '71d51f46-bcb1-45f3-454a-244857c42aba',
        level: '4P',
        phone: '0777063048',
        registrationDate: '09/10/22',
        responsible: 'Père',
      },
      {
        birthday: '09/12/22',
        fullname: 'Eddoussi Sarah',
        id: '9907e11b-4777-4eb9-8b57-1df16dd301c1',
        level: '3P',
        phone: '0855669933',
        registrationDate: '09/12/22',
        responsible: 'Autre',
      },
      {
        birthday: '09/12/22',
        fullname: 'Mohamed Amraoui',
        id: '0125aea9-8526-47f7-bf78-7db3675eab58',
        level: '6P',
        phone: '0699887744',
        registrationDate: '09/12/22',
        responsible: 'Mère',
      },
      {
        birthday: '09/04/22',
        fullname: 'Slimani Mohsin',
        id: '74c2653d-0e58-46df-b800-dc41f0e995f8',
        level: '2BACSEC',
        phone: '0666911974',
        registrationDate: '09/12/22',
        responsible: 'Père',
      },
      {
        birthday: '09/18/01',
        fullname: 'Elkhiyari Soukayna',
        id: '198adf7c-cfc2-40db-9ea9-04803a6607f7',
        level: '2C',
        phone: '0699885566',
        registrationDate: '09/12/22',
        responsible: 'Père',
      },
      {
        birthday: '09/12/98',
        fullname: 'Ghazi Salma',
        id: '2a7afbcb-e931-4e96-8a72-f0df16113367',
        level: '2BACSEC',
        phone: '0666119745',
        registrationDate: '09/12/22',
        responsible: 'Père',
      },
      {
        birthday: '09/12/01',
        fullname: 'Ibrahim Salah',
        id: 'b18c6a3c-b255-45e9-bc00-7d211858efce',
        level: '5P',
        phone: '0633552266',
        registrationDate: '09/12/22',
        responsible: 'Mère',
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
  },
})

export const {
  addNewAdherent,
  removeAdherent,
  filterAdherents,
  clearFilteredAdherents,
  isLookingFor,
} = adherentSlice.actions
const { reducer } = adherentSlice

export default reducer

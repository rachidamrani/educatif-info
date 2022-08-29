import { configureStore } from '@reduxjs/toolkit'
import adherentReducer from './adherentSlice'

export const store = configureStore({
  reducer: {
    adherents: adherentReducer,
  },
})

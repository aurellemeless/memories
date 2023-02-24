import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './reducers';

const store = configureStore({
  reducer: {
    card: cardSlice
  },
})

export default store;
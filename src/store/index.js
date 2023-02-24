import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './reducers';

const store = configureStore({
  reducer: cardSlice,
})

export default store;
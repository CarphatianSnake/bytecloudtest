import { configureStore } from '@reduxjs/toolkit';
import pricesSlice from '../slices/pricesSlice';

export const store = configureStore({
  reducer: {
    prices: pricesSlice
  },
  devTools: true
});

import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';
import { contactReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReduser,
  },
});

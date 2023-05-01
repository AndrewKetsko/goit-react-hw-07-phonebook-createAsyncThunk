import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './slice';

export const appStore = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';

export const appStore = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const slice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      if (
        !state.contacts.find(contact => contact.name === action.payload.name)
      ) {
        state.contacts.push(action.payload);
      }
    },
    delContact(state, action) {
      state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, delContact, filterContacts } = slice.actions;

const persistConfig = {
  key: 'phonebook',
  storage,
};

export const persistSliceReducer = persistReducer(persistConfig, slice.reducer);

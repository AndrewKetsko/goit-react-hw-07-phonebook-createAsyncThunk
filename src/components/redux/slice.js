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
      } else {alert(`${action.payload.name} is already in contacts`);}
    },
    delContact(state, action) {
        const index = state.contacts.findIndex(contact => contact.id === action.payload);
        state.contacts.splice(index, 1);
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

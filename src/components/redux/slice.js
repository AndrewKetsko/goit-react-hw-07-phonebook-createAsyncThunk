import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
//     contacts: [],
    filter: '',
  },
  reducers: {
//     addContact(state, action) {
//       if (
//         !state.contacts.find(contact => contact.name === action.payload.name)
//       ) {
//         state.contacts.push(action.payload);
//       } else {alert(`${action.payload.name} is already in contacts`);}
//     },
//     delContact(state, action) {
//         const index = state.contacts.findIndex(contact => contact.id === action.payload);
//         state.contacts.splice(index, 1);
//     },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, postContact, deleteContact } from './operations';
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postContact.pending](state) {
      state.isLoading = true;
    },
    [postContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
    },
    [postContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action, ){
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    }
  },
});

export const contactsReducer = contactSlice.reducer;




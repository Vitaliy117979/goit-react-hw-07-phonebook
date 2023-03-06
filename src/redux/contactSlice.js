import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, postContact, deleteContact } from './operations';

const extraAction = [fetchContacts, postContact, deleteContact];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...extraAction.map(item => item.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...extraAction.map(item => item.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(...extraAction.map(item => item.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const contactsReducer = contactSlice.reducer;

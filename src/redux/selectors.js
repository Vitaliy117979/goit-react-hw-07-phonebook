import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => {
  return state.contacts;
};

export const getFilter = state => {
  return state.filter;
};

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    console.log(contacts);
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

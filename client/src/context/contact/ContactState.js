import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  CONTACT_ADD,
  CONTACT_DELETE,
  CONTACT_CLEAR,
  CONTACT_SET,
  CONTACT_UPDATE,
  FILTER_CONTACTS,
  FILTER_CLEAR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
    currentContact: null,
    filteredContacts: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    // contact.id = uuid.v4();
    dispatch({ type: CONTACT_ADD, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: CONTACT_DELETE, payload: id });
  };

  // Set Current Contact
  const setCurrentContact = (contact) => {
    dispatch({ type: CONTACT_SET, payload: contact });
  };

  // Clear Current Contact
  const clearCurrentContact = () => {
    dispatch({ type: CONTACT_CLEAR });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: CONTACT_UPDATE, payload: contact });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: FILTER_CLEAR });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filteredContacts: state.filteredContacts,
        addContact,
        clearCurrentContact,
        clearFilter,
        deleteContact,
        filterContacts,
        setCurrentContact,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

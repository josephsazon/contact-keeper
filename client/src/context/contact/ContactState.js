import React, { useReducer } from 'react';
import axios from 'axios';

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
  CONTACT_ERROR,
  CONTACTS_GET,
  CONTACTS_CLEAR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    currentContact: null,
    error: null,
    filteredContacts: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);

      dispatch({ type: CONTACT_ADD, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({
        type: CONTACT_DELETE,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }

    dispatch({ type: CONTACT_DELETE, payload: id });
  };

  // Update Contact
  const updateContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({ type: CONTACT_UPDATE, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Set Current Contact
  const setCurrentContact = (contact) => {
    dispatch({ type: CONTACT_SET, payload: contact });
  };

  // Clear Current Contact
  const clearCurrentContact = () => {
    dispatch({ type: CONTACT_CLEAR });
  };

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({ type: CONTACTS_GET, payload: res.data });
    } catch (err) {}
  };

  const clearContacts = () => {
    dispatch({ type: CONTACTS_CLEAR });
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
        error: state.error,
        filteredContacts: state.filteredContacts,
        loading: state.loading,
        addContact,
        clearContacts,
        clearCurrentContact,
        clearFilter,
        deleteContact,
        filterContacts,
        getContacts,
        setCurrentContact,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

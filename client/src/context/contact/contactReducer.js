import {
  CONTACT_ADD,
  CONTACT_DELETE,
  CONTACT_SET,
  CONTACT_CLEAR,
  CONTACT_UPDATE,
  FILTER_CONTACTS,
  FILTER_CLEAR,
  CONTACT_ERROR,
  CONTACTS_GET,
  CONTACTS_CLEAR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CONTACT_ADD:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case CONTACT_DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case CONTACT_UPDATE:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CONTACT_SET:
      return {
        ...state,
        currentContact: action.payload,
      };
    case CONTACT_CLEAR:
      return {
        ...state,
        currentContact: null,
      };
    case CONTACTS_CLEAR: {
      return {
        ...state,
        contacts: null,
        currentContact: null,
        filteredContacts: null,
        error: null,
      };
    }
    case CONTACTS_GET:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filteredContacts: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');

          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case FILTER_CLEAR:
      return {
        ...state,
        filteredContacts: null,
      };
    default:
      return state;
  }
};

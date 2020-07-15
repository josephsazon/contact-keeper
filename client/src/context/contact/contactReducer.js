import {
  CONTACT_ADD,
  CONTACT_DELETE,
  CONTACT_SET,
  CONTACT_CLEAR,
  CONTACT_UPDATE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CONTACT_ADD:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CONTACT_DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case CONTACT_UPDATE:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
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
    default:
      return state;
  }
};

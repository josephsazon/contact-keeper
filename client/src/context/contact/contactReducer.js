import { CONTACT_ADD } from '../types';

export default (state, action) => {
  switch (action.type) {
    case CONTACT_ADD:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

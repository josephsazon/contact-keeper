import React, { Fragment, useContext } from 'react';

// state
import ContactContext from '../../context/contact/contactContext';

// components
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filteredContacts } = contactContext;

  const displayedContacts =
    filteredContacts === null ? contacts : filteredContacts;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {displayedContacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

export default Contacts;

import React, { Fragment, useContext } from 'react';

// state
import ContactContext from '../../context/contact/contactContext';

// components
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;

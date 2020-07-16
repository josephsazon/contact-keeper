import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
      <TransitionGroup>
        {displayedContacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={500} classNames="item">
            <ContactItem contact={contact} key={contact.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;

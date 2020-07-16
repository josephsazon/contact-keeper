import React, { useContext, useEffect, useRef } from 'react';

// state
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filteredContacts } = contactContext;

  useEffect(() => {
    if (filteredContacts === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      contactContext.filterContacts(e.target.value);
    } else {
      contactContext.clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;

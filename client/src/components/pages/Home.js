import React from 'react';

// components
import Contacts from '../contacts/Contacts';

const Home = () => {
  return (
    <div className="grid-2">
      <div>{/* Contact Form */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;

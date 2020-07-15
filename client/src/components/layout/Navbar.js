import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  icon: 'fas fa-id-card-alt',
  title: 'Contact Keeper',
};

export default Navbar;

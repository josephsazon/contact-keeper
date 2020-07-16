import React, { useState, useContext, useEffect } from 'react';

// state
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import AuthState from '../../context/auth/AuthState';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { error } = authContext;

  useEffect(() => {
    if (error === 'User already exists') {
      alertContext.setAlert(error, 'danger');
      authContext.clearErrors();
    }
  }, [error]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || password2 === '') {
      alertContext.setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      alertContext.setAlert('Passwords do not match', 'danger');
    } else {
      authContext.register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            minLength="6"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            minLength="6"
            required
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;

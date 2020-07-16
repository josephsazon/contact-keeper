import React, { useReducer } from 'react';

import AuthContext from './authContext';
import authReducer from './authReducer';

import {} from '../types';

const AuthState = (props) => {
  const initialState = {
    error: null,
    isAuthenticated: null,
    loading: true,
    token: localStorage.getItem('token'),
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User

  // Login User

  // Logout User

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        token: state.token,
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

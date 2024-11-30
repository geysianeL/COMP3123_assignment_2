import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import tokenService from '../services/tokenService';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        tokenService.getToken() ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;

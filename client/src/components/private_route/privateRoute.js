import React from 'react'
import { Redirect, Route } from 'react-router'
import { UserContext } from '../../hooks/userContext';

export const PrivateRoute = ({ children, ...rest }) => {
  const { notAuthenticated, loading } = React.useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() =>
        loading ? 'loading...' :
        notAuthenticated ?
          <Redirect to="/login" /> :
          children
      }
    />
  )
};
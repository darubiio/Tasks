import React from 'react'
import { Redirect, Route } from 'react-router'
import { UserContext } from '../../hooks/userContext';

export const PrivateRoute = ({ children, ...rest }) => {
  const { notAuthenticated, loading, username } = React.useContext(UserContext);
  console.log(username);
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
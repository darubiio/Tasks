import React from 'react';
import { useQuery } from '@apollo/client';
import { Redirect, Route } from 'react-router'
import { CURRENT } from '../../fetching/query';

export const PrivateRoute = ({ children, ...rest }) => {
  const { loading, error } = useQuery(CURRENT);
  return (
    <Route
      {...rest}
      render={() =>
        loading ? '' :
        error ?
          <Redirect to="/login" /> :
          children
      }
    />
  )
};
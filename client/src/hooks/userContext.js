import React from 'react';
import { gql, useQuery } from '@apollo/client';

const CURRENT = gql`
  query Current {
    currentUser {
     _id
      username
    }
  }`

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { loading, error, data } = useQuery(CURRENT);
  const current = (() => {
    return (
      loading ? { loading: 'Loading...' } :
        error ? { notAuthenticated: error.message } :
          data.currentUser
    )
  })();

  return (
    <UserContext.Provider value={current}>
      {children}
    </UserContext.Provider>
  )
};
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory, Redirect } from "react-router-dom";

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
        error ? { error: error.message } :
          data.currentUser
    )
  })();

  return (
    <UserContext.Provider value={current}>
      {children}
    </UserContext.Provider>
  )
};
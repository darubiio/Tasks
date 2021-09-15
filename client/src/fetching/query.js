import { gql } from '@apollo/client';

export const CURRENT = gql`
  query Current {
    currentUser {
     _id
      username
    }
  }
`
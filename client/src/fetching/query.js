import { gql } from '@apollo/client';

export const CURRENT = gql`
  query {
    currentUser {
      _id
      username
    }
  }
`
export const ALL = gql`
  query {
    lists {
      _id
      name
      tasks {
        _id
        name
      }
    }
  }
`
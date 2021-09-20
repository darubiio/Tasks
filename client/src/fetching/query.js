import { gql } from '@apollo/client';

export const CURRENT = gql`
  query Current {
    currentUser {
     _id
      username
    }
  }
`
export const ALL_TASKS = gql`
  query AllTasks {
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
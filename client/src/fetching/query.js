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
  tasks {
    _id
    name
  }
  lists {
    _id
    name
    tasks {
      _id
      name      
      important
      state
    }
  }
}
`
export const TASKS = gql`
  query Tasks {
    tasks {
      _id
      name
    }
  }
`
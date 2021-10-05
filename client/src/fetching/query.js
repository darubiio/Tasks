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
    state
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
      state
    }
  }
`

export const MY_DAY = gql`
  query MyDay {
  tasksMyDay {
    _id
    name
    state
    myDay
    important
    list {
      name
    }    
  }
}
`

export const IMPORTANTS = gql`
  query Importants {
  tasksImportants {
    _id
    name
    myDay
    state
    important
    list {
      name
    }
  }
}
`

export const COMPLETED = gql`
  query Completed {
  tasksCompleted {
    _id
    name
    state
    myDay
    important
    list {
      name
    }
  }
}
`
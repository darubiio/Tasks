import { gql } from '@apollo/client';

export const CURRENT = gql`
  query Current {
    currentUser {
     _id
      username
    }
  }
`

export const LISTS = gql`
  query Lists {
  lists {
    _id
    name
  }
}
`

export const LIST = gql`
  query List($_id: ID!) {
    list(_id: $_id) {
      _id
      name
      tasks {
        _id
        name
        state
        important
        myDay      
      }
    }
  }
`

export const ALL_TASKS = gql`
  query AllTasks {
  tasks {
    _id
    name
    state
    important
    myDay
  }
  lists {
    _id
    name
    tasks {
      _id
      name      
      important
      myDay
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
      important
      myDay
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
import { gql } from '@apollo/client';

export const
  LOGIN = gql`
  mutation signIn($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
  `,

  SIGNUP = gql`
  mutation signUp($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      _id
    }
  }
  `,

  ADD_TASK = gql`
  mutation CreateTaskMutation($name: String!) {
  createTask(name: $name) {
    _id
  }
}
  `,

  ADD_LIST = gql`
  mutation ADD_LIST($name: String!) {
    createList(name: $name) {
      _id
      name
    }
  }
  `,

  DELETE_LIST = gql`
    mutation DELETE_LIST($_id: ID!) {
      deleteList(_id: $_id) {
        _id
        name
        tasks {
          _id
          name
          state
          myDay
          important
        }
      }
    }
  `,

  CHANGE_STATE = gql`
  mutation UPDATE_STATE($_id: ID!, $state: Boolean!) {
  updateTaskState(_id: $_id, state: $state ) {
    _id
    state
  }
}
  `,

  CHANGE_IMPORTANT_STATE = gql`
  mutation UpdateTaskStateImportantMutation($_id: ID!, $important: Boolean!) {
  updateTaskStateImportant(_id: $_id, important: $important) {
    _id
    important
  }
}
  `;
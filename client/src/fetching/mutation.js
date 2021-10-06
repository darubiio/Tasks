import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation signIn($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }`

export const SIGNUP = gql`
  mutation signUp($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      _id
    }
}`

export const ADD_TASK = gql`
  mutation CreateTaskMutation($name: String!) {
  createTask(name: $name) {
    _id
  }
}
`

export const CHANGE_STATE = gql`
  mutation UPDATE_STATE($_id: ID!, $state: Boolean!) {
  updateTaskState(_id: $_id, state: $state ) {
    _id
    state
  }
}
`

export const CHANGE_IMPORTANT_STATE = gql`
  mutation UpdateTaskStateImportantMutation($_id: ID!, $important: Boolean!) {
  updateTaskStateImportant(_id: $_id, important: $important) {
    _id
    important
  }
}
`
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
  mutation UPDATE_STATE($_id: ID!, $state: Boolean!, $important: Boolean!, $myDay: Boolean!) {
  updateTaskState(_id: $_id, state: $state, important: $important, myDay: $myDay) {
    _id
    name
    state
  }
}
`
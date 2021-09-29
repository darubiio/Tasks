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


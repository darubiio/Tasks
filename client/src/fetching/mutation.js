import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }`
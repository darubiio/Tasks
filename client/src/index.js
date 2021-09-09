import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { ChakraProvider } from "@chakra-ui/react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:5500',
});

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjhiMzgxNGVhZWVlNzE1MDAyNGI5NiIsInVzZXJuYW1lIjoiZGFydWJpbyIsImlhdCI6MTYzMTE5NzU5NCwiZXhwIjoxNjMxMjAxMTk0fQ.rXd0weySQbtrIw614SAedJ635-zcu2Vcd-nr4FLMPZI`,
      // authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
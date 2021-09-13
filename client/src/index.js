import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import 'bootstrap-icons/font/bootstrap-icons.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:5500',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>    
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>    
  </ApolloProvider>,
  document.getElementById('root')
);
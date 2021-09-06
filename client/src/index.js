import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";


const client = new ApolloClient({
  uri: 'http://localhost:5500/',
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
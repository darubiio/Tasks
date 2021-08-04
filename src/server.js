import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers/index.js'

export const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
})
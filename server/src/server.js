import { ApolloServer } from 'apollo-server';
import { getUser } from './util/verify.js';

import List from './database/model/listSchema.js';
import Task from './database/model/taskSchema.js';
import User from './database/model/userSchema.js';

import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';

export const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: ({ req }) => {
    const tokenBearer = req.headers.authorization || '';
    const token = tokenBearer.split(' ')[1];
    const user = getUser(token);
    return { user, List, Task, User };
  }
});
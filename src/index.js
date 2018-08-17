import path from 'path';
import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';

import resolvers from './resolvers';
import models from './models';

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const { authorization } = req.headers;

    const user = models.Users.findOne({ 'tokens.token': authorization });
    return { user, models };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

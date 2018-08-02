import path from 'path';
import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import db from './db';
import resolvers from './resolvers';

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const { authorization } = req.headers;
    const user = db.users.find(u => u.tokens.some(({ token }) => token === authorization));
    // console.log(req);
    return { user, db }; 
  },
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

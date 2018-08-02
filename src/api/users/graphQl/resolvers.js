import types from './types';
import Query from './queries';
import Mutation from './mutations';

const resolvers = {
  ...types,
  Query,
  Mutation,
};

export default resolvers;

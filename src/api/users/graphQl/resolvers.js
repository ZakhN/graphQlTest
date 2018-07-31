import types from './types';

import Mutation from './mutations';

const resolvers = {
  ...types,
  Mutation,
};

export default resolvers;

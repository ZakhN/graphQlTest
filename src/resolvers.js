import Locations from './api/locations/graphql/resovlers';
import Couriers from './api/couriers/graphql/resolvers';

const resolvers = {
  ...Locations,
  ...Couriers,
};

export default resolvers;

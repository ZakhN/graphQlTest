import Locations from './api/locations/graphql/resovlers';
import Couriers from './api/couriers/graphql/resolvers';
import Users from './api/users/graphql/resolvers';

const resolvers = {
  ...Locations,
  ...Couriers,
  ...Users,
};

export default resolvers;

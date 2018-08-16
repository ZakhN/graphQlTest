
const createLocation = async (root, { coordinates, name }, context) => {
  console.log(coordinates);
  const location = {
    name,
    coordinates,
    status: 'EMPTY',
  };

  const locationMongo = await context.models.Locations.create(location);

  return locationMongo;
};

export default createLocation;

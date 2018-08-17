const createLocation = async (root, { coordinates, name }, context) => {
  const doc = {
    name,
    coordinates,
    status: 'EMPTY',
  };

  const location = await context.models.Locations.create(doc);

  return location;
};

export default createLocation;

const createLocation = (root, args, context) => {
  const db = context.db.locations;

  const location = {
    _id: parseInt(db[db.length - 1]._id, 10) + 1,
    name: args.name,
    coordinates: args.coordinates,
    status: 'EMPTY',
  };

  db.push(location);

  return location;
};

export default createLocation;

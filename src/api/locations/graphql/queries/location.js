const location = (root, args, context) => context.db.locations.find(loc => loc._id === args._id);

export default location;

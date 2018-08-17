const location = (root, args, context) => context.models.Locations.findOne({ _id: args._id });

export default location;

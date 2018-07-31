const types = {
  Courier: {
    fullName: root => `${root.firstName} ${root.lastName}`,
    locations: (root, args, context) => context.db.locations.filter(loc => root.locations.includes(loc._id)),
  },
};

export default types;

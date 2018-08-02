const types = {
  Courier: {
    fullName: root => `${root.firstName} ${root.lastName}`,
    locations: (root, args, context) => {
      const locations = context.db.locations.filter(loc => root.locations.includes(loc._id));

      return locations;
    },
  },
};

export default types;

const types = {
  Courier: {
    fullName: root => `${root.firstName} ${root.lastName}`,
    locations: async (root, args, context) => {
      const locations = await context.models.Locations.find({ _id: { $in: root.locationIds } });
      return locations;
    },
  },
};

export default types;

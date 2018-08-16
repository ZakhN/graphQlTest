const types = {
  Courier: {
    fullName: root => `${root.firstName} ${root.lastName}`,
    locations: (root, args, context) => {
      const locations = context.db.locations.filter(loc => root.locations.includes(loc._id));

    locations: async (root, args, context) => {
      console.log(root.locationIds);
      const locations = await context.models.Locations.find({ _id: { $in: root.locationIds } });
      //db.locations.filter(loc => root.locations.includes(loc._id));
      return locations;
    },
  },
};

export default types;

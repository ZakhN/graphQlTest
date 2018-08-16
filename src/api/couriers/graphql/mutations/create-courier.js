const createCourier = async (root, { firstName, lastName, locationIds }, context) => {
  const doc = {
    firstName,
    lastName,
    locationIds,
    status: 'EMPTY',
  };

  const courier = await context.models.Couriers.create(doc);

  return courier;
};

export default createCourier;

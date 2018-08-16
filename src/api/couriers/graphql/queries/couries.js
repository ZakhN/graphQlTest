
const couriersQuery = async (root, args, context) => {
  console.log(context);
  // if (!context.user) throw new Error('Access denied');

  const couriers = await context.models.Couriers.find();

  return couriers;
};

export default couriersQuery;

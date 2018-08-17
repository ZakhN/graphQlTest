const couriersQuery = async (root, args, context) => {
  console.log(context);
  const couriers = await context.models.Couriers.find();

  return couriers;
};

export default couriersQuery;

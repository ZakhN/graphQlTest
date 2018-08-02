const couriers = (root, args, context) => {
  console.log(context);
  if (!context.user) throw new Error('Access denied');

  return context.db.couriers;
};

export default couriers;

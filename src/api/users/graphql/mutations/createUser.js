const jwt = require('jsonwebtoken');

const createUser = async (root, { email, password }, context) => {
  const existingUser = await context.models.Users.findOne({ email });
  if (existingUser) throw new Error('User with this email is exist');

  const token = jwt.sign({ data: email }, 'shhhhh', { expiresIn: '1h' });

  const doc = {
    email,
    password,
    tokens: [{ token }],
  };

  const user = await context.models.Users.create(doc);

  return { token, _id: user._id };
};

export default createUser;

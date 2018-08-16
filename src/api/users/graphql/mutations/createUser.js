const jwt = require('jsonwebtoken');

const createUser = async (root, { email, password }, context) => {
  const token = jwt.sign({ data: email }, 'shhhhh', { expiresIn: '1h' });

  // const isExsist = db.filter(u => u.email === email);

  // if (isExsist.length !== 0) throw new Error('User with this email is exist');

  const doc = {
    email,
    password,
    tokens: [{ token }],
  };

  const user = await context.models.Users.create(doc);

  return { token, _id: user._id };
};

export default createUser;

const jwt = require('jsonwebtoken');

const createUser = (root, { email, password }, context) => {
  const db = context.db.users;
  const token = jwt.sign({ data: email }, 'shhhhh', { expiresIn: '1h' });

  const isExsist = db.filter(u => u.email === email);

  if (isExsist.length !== 0) throw new Error('User with this email is exist');

  const user = {
    _id: (parseInt(db[db.length - 1]._id, 10) + 1).toString(),
    email,
    password,
    tokens: [{ token }],
  };

  db.push(user);

  return { token, userId: user._id };
};

export default createUser;

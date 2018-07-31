const jwt = require('jsonwebtoken');

const createUser = (root, { email, password }, context) => {
  const db = context.db.users;
  const token = jwt.sign({ data: email }, 'shhhhh', { expiresIn: '1h' });
  const LoginResponse = {
    userId: parseInt(db[db.length - 1]._id, 10) + 1,
    email,
    token,
  };

  const user = {
    email,
    password,
  };

  db.push(user);

  return LoginResponse;
};

export default createUser;

const jwt = require('jsonwebtoken');

const loginWithPassword = (root, { password, email }, context) => {
  const db = context.db.users;

  const token = jwt.sign({ data: email }, 'shhhhh', { expiresIn: '1h' });

  const user = db.filter(u => u.email === email);
  if (!user) throw new Error('User not found');
  if (user.password !== password) throw new Error('Incorrect password');

  const loginResponse = {
    userId: user._id,
    token,
  };

  return loginResponse;
};

export default loginWithPassword;

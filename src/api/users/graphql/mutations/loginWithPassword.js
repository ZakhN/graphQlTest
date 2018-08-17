const jwt = require('jsonwebtoken');

const loginWithPassword = async (root, { password, email }, context) => {
  const user = await context.models.Users.findOne({ email });
  if (!user) console.log('User not found');
  if (!user) throw new Error('User not found');
  if (user.password !== password) throw new Error('Incorrect password');

  const token = jwt.sign({ data: email }, 'shhhhh', { expiresIn: '1h' });

  const loginResponse = {
    userId: user._id,
    token,
  };

  return loginResponse;
};

export default loginWithPassword;

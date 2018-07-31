const jwt = require('jsonwebtoken');
const createUser = (root, args, context) => {

const db = context.db.users;

  const LoginResponse = {
    userId: 
    email: args.email,
    token:  
    expiresAl:
  };
  
  db.push(LoginResponse);

  return LoginResponse;
};

export default createLocaton;
const types = {
  User: {
    email: root => `${root.name}`,
  },
};

export default types;

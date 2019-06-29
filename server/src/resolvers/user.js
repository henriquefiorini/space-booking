const resolver = {
  Query: {
    me: (parent, args, context) => (
      context.dataSources.userAPI.findOrCreateUser()
    ),
  },

  Mutation: {
    login: async (parent, args, context) => {
      const { email, password } = args;
      const { dataSources } = context;
      const user = await dataSources.userAPI.findOrCreateUser({ email });
      if (user) {
        return Buffer.from(email).toString('base64');
      }
    },
  },
};

module.exports = resolver;

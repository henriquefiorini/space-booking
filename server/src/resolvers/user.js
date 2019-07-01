const bcrypt = require('bcrypt');

const { tokenHandler } = require('../utils');

const resolver = {
  Query: {
    me: (parent, args, context) => (
      context.dataSources.userAPI.findUser()
    ),
  },

  Mutation: {
    login: async (parent, args, context) => {
      const { email, password } = args;
      const { dataSources } = context;

      const user = await dataSources.userAPI.findUser({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error('Invalid password');
      }

      const token = tokenHandler.sign({
        user: {
          id: user.dataValues.id,
          email: user.dataValues.email,
        },
      });
      return token;
    },

    register: async (parent, args, context) => {
      const { email, password: passwordArg } = args;
      const { dataSources } = context;

      const isTaken = await dataSources.userAPI.findUser({ email });
      if (isTaken) {
        throw new Error('Account already exists');
      }

      const password = await bcrypt.hash(passwordArg, 10);
      const user = await dataSources.userAPI.createUser({
        email,
        password,
      });
      if (!user) {
        throw Error('Cannot create account');
      }

      const token = tokenHandler.sign({
        user: {
          id: user.dataValues.id,
          email: user.dataValues.email,
        },
      });
      return token;
    },
  },
};

module.exports = resolver;

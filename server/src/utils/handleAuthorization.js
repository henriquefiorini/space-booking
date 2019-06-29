const isEmail = require('isemail');

const createStore = require('./createStore');

const store = createStore();

const handleAuthorization = async ({ req }) => {
  const auth = (req.headers && req.headers.authorization) || '';
  const email = Buffer.from(auth, 'base64').toString('ascii');

  if (!isEmail.validate(email)) {
    return {
      user: null,
    };
  }

  const users = await store.users.findOrCreate({ where: { email } });
  const user = users && users[0] ? users[0] : null;

  return {
    user: {
      ...user.dataValues,
    },
  };
}

module.exports = handleAuthorization;

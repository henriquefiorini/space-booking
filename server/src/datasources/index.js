const { createStore } = require('../utils');

const LaunchAPI = require('./launch');
const UserAPI = require('./user');

const store = createStore();

const dataSources = () => ({
  launchAPI: new LaunchAPI(),
  userAPI: new UserAPI({ store }),
});

module.exports = dataSources;

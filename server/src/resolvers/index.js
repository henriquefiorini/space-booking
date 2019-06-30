const { merge } = require('lodash');

const userResolver = require('./user');
const launchResolver = require('./launch');

const resolvers = merge(
  userResolver,
  launchResolver,
);

module.exports = resolvers;

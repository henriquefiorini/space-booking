const { merge } = require('lodash');

const userResolver = require('./user');
const launchResolver = require('./launch');
const missionResolver = require('./mission');

const resolvers = merge(
  userResolver,
  launchResolver,
  missionResolver,
);

module.exports = resolvers;

const { gql } = require('apollo-server');

const User = require('./user');
const Launch = require('./launch');
const Mission = require('./mission');
const Rocket = require('./rocket');

const typeDefs = gql`
  scalar DateTime

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  interface Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime
  }
`;

module.exports = [
  typeDefs,
  User,
  Launch,
  Mission,
  Rocket,
];

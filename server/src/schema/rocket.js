const { gql } = require('apollo-server');

const typeDefs = gql`
  type Rocket implements Node {
    id: ID!
    name: String
    type: String
    createdAt: DateTime!
    updatedAt: DateTime
  }

  extend type Launch {
    rocket: Rocket
  }
`;

module.exports = typeDefs;

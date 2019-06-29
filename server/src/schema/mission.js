const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mission implements Node {
    id: ID!
    name: String
    createdAt: DateTime!
    updatedAt: DateTime
  }

  extend type Launch {
    mission: Mission
  }
`;

module.exports = typeDefs;

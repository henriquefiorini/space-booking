const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Mutation {
    missionPatch(mission: String, size: PatchSize): String
  }

  type Mission implements Node {
    id: ID!
    name: String
    missionPatch(size: PatchSize): String
    createdAt: DateTime!
    updatedAt: DateTime
  }

  extend type Launch {
    mission: Mission
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;

module.exports = typeDefs;

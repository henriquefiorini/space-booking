const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    me: User
  }

  extend type Mutation {
    login(email: String!, password: String!): String
    register(email: String!, password: String!): String
  }

  type User implements Node {
    id: ID!
    email: String!
    createdAt: DateTime!
    updatedAt: DateTime
  }
`;

module.exports = typeDefs;

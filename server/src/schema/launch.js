const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    launch(launchId: ID!): Launch
    launches: [Launch!]!
  }

  extend type Mutation {
    bookTrips(launchIds: [ID!]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
  }

  type Launch implements Node {
    id: ID!
    site: String
    isBooked: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime
  }

  extend type User {
    trips: [Launch!]!
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch!]!
  }
`;

module.exports = typeDefs;

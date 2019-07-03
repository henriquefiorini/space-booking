const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    launch(launchId: ID!): Launch
    launches(pageSize: Int, after: String): LaunchConnection!
  }

  extend type Mutation {
    bookTrips(launchIds: [ID!]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
  }

  type Launch implements Node {
    id: ID!
    date: String
    details: String
    images: [String!]
    site: String
    isBooked: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime
  }

  extend type User {
    trips: [Launch!]!
  }

  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch!]!
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch!]!
  }
`;

module.exports = typeDefs;

require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const dataSources = require('./dataSources');

const { handleAuthorization } = require('./utils');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: handleAuthorization,
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url} 🚀`);
});

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const dataSources = require('./dataSources');

const server = new ApolloServer({
  typeDefs,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`Server running on ${url} 🚀`);
});

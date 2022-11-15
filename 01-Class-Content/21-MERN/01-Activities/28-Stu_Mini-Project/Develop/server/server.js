const express = require('express');
// Uncomment the following code once you have built the queries and mutations
// const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// Uncomment the following code once you have built the queries and mutations
// const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Comment out this code once you have built out queries and mutations
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
// Uncomment the following code once you have built the queries and mutations
/*
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Comment out this code once you have built out queries and mutations
app.use(routes);

// Uncomment the following code once you have built the queries and mutations
/* 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};
*/

// Comment out this code once you have built out queries and mutations
db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

// Uncomment the following code once you have built the queries and mutations
// startApolloServer(typeDefs, resolvers);

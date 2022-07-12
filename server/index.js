const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const express = require("express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cors: {
      origin: [
        "http://localhost:3000",
        "https://helicarrier-task.netlify.app/",
      ],
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  // await server.stop();

  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log("SERVER UP ON PORT 4000");
  });
}

startApolloServer(typeDefs, resolvers);

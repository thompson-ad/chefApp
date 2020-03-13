import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";
import accessEnv from "#root/helpers/accessEnv";
import resolvers from "#root/graphql/resolvers/index";
import typeDefs from "#root/graphql/typeDefs";

// db on 7999
// server 7000
// app 7001
const PORT = accessEnv("PORT", 7000);

// create new Apollo Server
const apolloServer = new ApolloServer({ resolvers, typeDefs });

const app = express(); // initialise http server

// this allows access to this server from a front end app from any other domain

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
  })
);
// We can use the 'express' module to run a webserver, and instead of executing a query directly with the graphql function, we can use the express-graphql library to mount a GraphQL API server on the “/graphql” HTTP endpoint:
// The applyMiddleware method is provided by the apollo-server-{integration} packages that use middleware, such as hapi and express. This method connects ApolloServer to a specific HTTP framework.
// If no path is specified, it defaults to `/graphql`.
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, "0.0.0.0", () => {
  console.info(`GSD service listening on ${PORT}`);
});

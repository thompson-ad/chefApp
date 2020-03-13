import { gql } from "apollo-server";

// this file specfies the structure of our graphql API

const typeDefs = gql`
  type Chef {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
  }

  type Mutation {
    createChef(name: String!): Chef!
    createRestaurant(chefId: ID!, name: String!): Restaurant!
  }

  type Query {
    chefs: [Chef!]!
  }
`;

export default typeDefs;

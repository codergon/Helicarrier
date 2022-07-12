const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Transaction {
    id: String!
    status: String!
    date: String!
    time: String!
    asset: String!
    type: String!
    platform: String!
    address: String!
  }

  # Queries
  type Query {
    transactions(filter: String): [[Transaction!]!]!
  }
`;

module.exports = { typeDefs };

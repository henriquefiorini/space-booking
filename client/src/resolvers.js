import gql from 'graphql-tag';

import { GET_CART_ITEMS_QUERY } from './pages/CartPage';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [Launch!]
  }

  extend type Launch {
    isInCart: Boolean!
  }
`;

export const resolvers = {
  Launch: {
    isInCart: (parent, args, context) => {
      const { cartItems } = context.cache.readQuery({
        query: GET_CART_ITEMS_QUERY,
      });
      return cartItems.includes(parent.id);
    },
  },
};

import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Page, Header, Section } from '../components';

export const GET_CART_ITEMS_QUERY = gql`
  query GetCartItems {
    cartItems @client
  }
`;

function CartPage() {
  return (
    <Page>
      <Header title="Shopping Cart" icon="🛒" />
      <Query query={GET_CART_ITEMS_QUERY}>
        {
          ({ data, loading, error }) => {
            if (loading) return <div>Loading cart...</div>;
            if (error) return <div>Error loading cart...</div>;

            const hasItems = data.cartItems && data.cartItems.length;

            return (
              <Section title={hasItems
                ? `Cart (${data.cartItems.length})`
                : 'Cart'
              }>
                {hasItems ? data.cartItems.map(item =>
                  <div>{item.id}</div>
                ) : (
                  <div>Your cart is empty...</div>
                )}
              </Section>
            );
          }
        }
      </Query>
    </Page>
  );
}

export default CartPage;

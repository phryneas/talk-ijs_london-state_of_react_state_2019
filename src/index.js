import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient, { gql } from "apollo-boost";
import {
  simulateLoadingUserFromLocalStorage,
  simulateLogin
} from "./dataFetching";
import { App } from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  resolvers: {
    Mutation: {
      async login(root, variables, context) {
        const { username, password } = variables;

        const user = (await simulateLogin(username, password)) || null;
        const error = !!user ? null : "wrong username or password";

        const { cache, getCacheKey } = context;
        const id = getCacheKey({ __typename: "LoginState", id: 0 });
        const fragment = gql`
          fragment loginFragment on LoginState {
            user {
              username
              role
            }
            error
          }
        `;
        const receivedData = cache.readFragment({ fragment, id });
        const newData = {
          ...receivedData,
          user: user && { __typename: "User", id: 0, ...user },
          error
        };

        cache.writeFragment({ fragment, id, data: newData });
      },
      logout(root, variables, context) {
        const { cache, getCacheKey } = context;
        const id = getCacheKey({ __typename: "LoginState", id: 0 });
        const fragment = gql`
          fragment logoutFragment on LoginState {
            user {
              username
              role
            }
          }
        `;
        const receivedData = cache.readFragment({ fragment, id });
        const newData = { ...receivedData, user: null };

        cache.writeFragment({ fragment, id, data: newData });
      }
    }
  }
});

client.writeData({
  data: {
    loginState: {
      __typename: "LoginState",
      id: 0,
      user: null,
      error: null,
      initialized: false
    }
  }
});

simulateLoadingUserFromLocalStorage().then(user => {
  client.writeData({
    data: {
      loginState: {
        __typename: "LoginState",
        id: 0,
        initialized: true,
        user: user || null
      }
    }
  });
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);

import "@babel/polyfill";
import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "react-apollo";
import Root from "./components/Root";
import graphqlClient from "./api/graphql";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');

  body {
      font-family: Roboto, sans-serif;
  }
`;

render(
  <ApolloProvider client={graphqlClient}>
    <GlobalStyle />
    <Root />
  </ApolloProvider>,
  document.getElementById("app")
);

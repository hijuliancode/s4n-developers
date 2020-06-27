import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize, Normalize } from "styled-normalize";
import * as Theme from "./config/theme/";

export const GlobalStyle = createGlobalStyle`
  ${Normalize}
`;

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

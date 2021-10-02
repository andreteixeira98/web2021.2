import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    width: 100vw;
    height: 100vh;

    background-color:white;
    font-family: 'Roboto Condensed', sans-serif;
  }
  
`;


ReactDOM.render(
  <React.StrictMode>

    <App />
    <GlobalStyle />

  </React.StrictMode>,
  document.getElementById('root')
);

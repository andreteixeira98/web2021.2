import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    width: 100vw;
    height: 100vh;

    background-color:white;
  }
  
`;


ReactDOM.render(
  <React.StrictMode>

    <App />
    <GlobalStyle />

  </React.StrictMode>,
  document.getElementById('root')
);

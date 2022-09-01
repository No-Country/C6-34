import React from 'react';
import {ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { theme } from './tools/index';
import { BrowserRouter } from "react-router-dom";
//import theme from '../src/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
    </BrowserRouter>

);



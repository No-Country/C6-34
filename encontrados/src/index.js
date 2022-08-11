import React from 'react';
import {ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { theme } from './tools/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);



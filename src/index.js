import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './structure/Routes';

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root'),
);

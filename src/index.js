import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './structure/Routes';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

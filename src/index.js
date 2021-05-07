import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './structure/Routes';
import bgImg from './assets/images/background.jpg';

const bg = document.getElementsByTagName('body')[0];
bg.style.backgroundImage = `url(${bgImg})`;
bg.style.backgroundRepeat = 'no-repeat';
bg.style.backgroundSize = 'cover';
bg.style.backgroundAttachment = 'fixed';

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

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MFAppContext from './common/microAppContext';

import('dhubShell/MicroReactApp').then(({ default: MicroReactApp }) => {
  const SERVICE_NAME = process.env.APP_SERVICE_NAME;

  const mAPP = new MicroReactApp(SERVICE_NAME);

  mAPP.config({
    React,
    ReactDOM,
    MFAppContext,
    RootComponent: App
  });

  mAPP.render();
});

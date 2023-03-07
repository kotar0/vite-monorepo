import React from 'react';
import './App.css';
import './styles/global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppProviders } from './providers/AppProvides';

function App() {
  return (
    <React.StrictMode>
      <AppProviders></AppProviders>
    </React.StrictMode>
  );
}

export { App };

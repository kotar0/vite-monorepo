import React from 'react';
import './App.css';
import './styles/global.css';
import { AppProviders } from './providers/AppProvides';

function App() {
  return (
    <React.StrictMode>
      <AppProviders></AppProviders>
    </React.StrictMode>
  );
}

export default App;

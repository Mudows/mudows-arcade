import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import ArcadeProvider from './context/arcadeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ArcadeProvider>
      <App />
    </ArcadeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Lobby from './pages/Lobby';

import './css/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/lobby" component={ Lobby } />
      </Switch>
    </BrowserRouter>
  );
}

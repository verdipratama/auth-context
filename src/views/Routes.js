import React from 'react';
import './styles/global.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import LoginForm from './pages/LoginForm';

export default () => {
  return (
    <section id="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </Router>
    </section>
  );
};

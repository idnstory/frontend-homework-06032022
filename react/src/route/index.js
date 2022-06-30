import React from 'react';
import { Router, Route } from 'react-router-dom';
import Dashboard from 'layouts/Dashboard';
import history from './history';

const AppRouter = () => {
  return (
    <Router
      history={ history }
    >
      <Route path="/" component={ Dashboard } />
    </Router>
  );
};

export default AppRouter;

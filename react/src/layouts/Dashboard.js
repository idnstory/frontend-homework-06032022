import React from 'react';
import Gnb from 'components/Gnb';
import Header from 'components/Header';
import { Route } from 'react-router-dom';
import Work from 'pages/Work';
import 'scss/layouts/dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-wrap">
      <Header />
      <div className="dashboard">
        <Gnb />
        <Route
          path="*"
          component={ Work }
        />
      </div>
    </div>
  );
};

export default Dashboard;

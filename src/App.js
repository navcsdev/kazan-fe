import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import Register from './pages/register';
import Layout from "./layouts/layout";

const pageList = [
  { component: Register, path: '/' },
];

const App = () => (
  <div>
    <Layout>
      {/* <BodyPageStyled> */}
      <Switch>
        {
          pageList.map(({ exact, ...item }) => (
            <RouteWithSubRoutes key={item.path} exact={true} {...item} />
          ))
        }
      </Switch>
      {/* </BodyPageStyled> */}
    </Layout>

    {/* <Footer /> */}
    {/* <Alert stack={{limit: 3}} effect="jelly"/> */}
  </div>
);

export default App;

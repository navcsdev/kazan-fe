import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import Register from './pages/register';

const pageList = [
  { component: Register, path: '/' },
];

const App = () => (
  <div>
    {/* <Header /> */}
    {/* <BodyPageStyled> */}
      <Switch>
        {
          pageList.map(({ exact, ...item }) => (
            <RouteWithSubRoutes key={item.path} exact={true} {...item} />
          ))
        }
      </Switch>
    {/* </BodyPageStyled> */}
    {/* <Footer /> */}
    {/* <Alert stack={{limit: 3}} effect="jelly"/> */}
  </div>
);

export default App;

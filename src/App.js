import React from 'react';
import Header from "./layouts/header";
import Home from './pages/home'
import Login from './pages/login'
import Register from './auth/register'
import { Switch } from 'react-router-dom';
import Verification from './pages/verification'
import RouteWithSubRoutes from './components/RouteWithSubRoutes'

const pageList = [
  { component: Home, path: '/' },
  { component: Login, path: '/login' },
  { component: Register, path: '/register'},
  { component: Verification, path: '/verification' }
];

const App = () => (
  <div>
    <Header/>
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
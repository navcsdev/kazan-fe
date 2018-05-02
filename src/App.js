import React from 'react';
import Layout from "./layouts/layout";
import Login from './auth/login'
import Register from './auth/register'
import { Switch } from 'react-router-dom';
import Home from './home/index';
import RouteWithSubRoutes from './components/RouteWithSubRoutes'

const pageList = [
  { component: Login, path: '/' },
  { component: Login, path: '/login' },
  { component: Register, path: '/register'},
  { component: Home, path: '/home' }
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
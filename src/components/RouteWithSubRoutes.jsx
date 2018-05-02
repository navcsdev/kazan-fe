import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route, Switch} from 'react-router-dom';
// import { isUserLoggedIn, hasEosAccount } from '../site-user/common/AppUtils'

const RouteWithSubRoutes = (route) => {
  const {path, routes, isPrivate, isNotSignedIn, ...p} = route;
  delete p.component;

  return (
    <Route
      path={path}
      render={(props) => {

        // check for login status
        // if (isPrivate) {
        //   if (!isUserLoggedIn()) {
        //     return <Redirect to="/login"/>
        //   }
        //   if (!hasEosAccount() && path !== '/eos-account') {
        //     return <Redirect to="/eos-account"/>
        //   }
        //   if (hasEosAccount() && path === '/eos-account') {
        //     return <Redirect to="/"/>
        //   }
        // }

        // if (isNotSignedIn) {
        //   if (isUserLoggedIn()) {
        //     return <Redirect to="/"/>
        //   }
        // }

        return (<route.component {...props} {...p} routes={routes}/>);
      }}/>
  );
};

RouteWithSubRoutes.propTypes = {
  path: PropTypes.string,
  isPrivate: PropTypes.bool,
  routes: PropTypes.array,
};

export default RouteWithSubRoutes;

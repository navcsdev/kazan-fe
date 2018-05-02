import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import awsmobile from './aws-exports';
import Amplify from 'aws-amplify';


Amplify.configure(awsmobile);

const history = createHistory();

const store = init({
  redux: {
    middlewares:[routerMiddleware(history)]
  }
});



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

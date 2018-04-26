import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

const history = createHistory();

const store = init({
  redux: {
    middlewares:[routerMiddleware(history)]
  }
});

Amplify.configure(aws_exports);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

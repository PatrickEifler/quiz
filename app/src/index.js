import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './Root';
import configureStore from './store/configureStore';

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDom.render(<Root store={store} history={history} />, app);
}

main();

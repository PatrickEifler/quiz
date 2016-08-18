import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './tools/devTools';
import { Router } from 'react-router';
import Routes from './Routes';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={Routes} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

import React from 'react';
import { Route, withRouter } from 'react-router';
import { routerActions } from 'react-router-redux';
import App from './containers/App';
import Quiz from './containers/Quiz';

export default (
  <Route path="/" component={App}>
  	<Route path="quiz" component={Quiz}/>
  </Route>
);

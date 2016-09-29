import React from 'react';
import { Route, withRouter } from 'react-router';
import { routerActions } from 'react-router-redux';
import App from './containers/App';
import Quizzes from './containers/Quizzes';
import Quiz from './containers/Quiz';
import Result from './containers/Result';

export default (
  <Route path="/" component={App}>
  	<Route path="/quizzes" component={Quizzes} />
  	<Route path="/quizzes/:uid" component={Quiz} />
  	<Route path="/quizzes/:uid/result" component={Result} />
  </Route>
);

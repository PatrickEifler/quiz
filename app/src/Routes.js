import React from 'react';
import { Route, withRouter } from 'react-router';
import { routerActions } from 'react-router-redux';
import App from './containers/App';
import Quizzes from './containers/Quizzes';

export default (
  <Route path="/" component={App}>
  	<Route path="/quizzes" component={Quizzes}/>
  </Route>
);
//TODO: <Route path="/quizzes/:id" component={Quiz}/>

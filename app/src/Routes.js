import React from 'react';
import { Route, withRouter } from 'react-router';
import { routerActions } from 'react-router-redux';
import App from './containers/App';
import Quizzes from './containers/Quizzes';
import Quiz from './containers/Quiz';

export default (
  <Route path="/" component={App}>
  	<Route path="/quizzes" component={Quizzes}/>
  	<Route path="/quizzes/:uid" component={Quiz}/>
  </Route>
);
//TODO: <Route path="/quizzes/:id/questions/:id" component={Question}/>

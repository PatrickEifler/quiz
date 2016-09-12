import React from 'react';
import { Route, withRouter } from 'react-router';
import { routerActions } from 'react-router-redux';
import App from './containers/App';
import Quizzes from './containers/Quizzes';
import Quiz from './containers/Quiz';
import Question from './components/question'

export default (
  <Route path="/" component={App}>
  	<Route path="/quizzes" component={Quizzes}/>
  	<Route path="/quizzes/:uid" component={Quiz} />
  </Route>
);

// <Route path="/quizzes/:uid" component={Quiz}>
// 	<Route path="question" component={Question} />
//</Route>

// <Route component={Quiz}>
// 		<Route path="session" component={QuizSession} />
// 	</Route>

//TODO: <Route path="/quizzes/:id/questions/:id" component={Question}/>

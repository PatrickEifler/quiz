import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import quizzes from './quizzes';
import quiz from './quiz';

const rootReducer = combineReducers({
  routing,
  quizzes,
  quiz
});

export default rootReducer;

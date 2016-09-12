import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import quizzes from './quizzes';
import quiz from './quiz';
import questions from './questions';

const rootReducer = combineReducers({
  routing,
  quizzes,
  quiz,
  questions
});

export default rootReducer;

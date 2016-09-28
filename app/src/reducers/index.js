import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import quizzes from './quizzes';
import quiz from './quiz';
import questions from './questions';
import score from './score';
import feedback from './feedback';

const rootReducer = combineReducers({
  routing,
  quizzes,
  quiz,
  questions,
  score,
  feedback
});

export default rootReducer;

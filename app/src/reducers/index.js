import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import quizzes from './quizzes';

const rootReducer = combineReducers({
  routing,
  quizzes
});

export default rootReducer;

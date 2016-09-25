'use strict';

import * as types from '../actions/quiz/constants';

const initialState = {
	isFetching: false,
	hasStarted: false,
	item: {}
};

const quiz = (state=initialState, action) => {
	switch (action.type) {

		case types.RECEIVE_QUIZ:
			return Object.assign({}, state, {
				isFetching: false,
				lastReceived: action.lastReceived,
				item: action.quiz
			});

		case types.REQUEST_QUIZ:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.START_QUIZ:
			return Object.assign({}, state, {
				hasStarted: true
			});

		case types.ABORT_QUIZ:
			return Object.assign({}, state, {
				hasStarted: false
			});

		case types.FINISH_QUIZ:
			return Object.assign({}, state, {
				hasStarted: false
				//get the quiz results
				//score from each question add score points to each questions
				//mover ranking reducer
			});

		default:
			return state;
	}
};

export default quiz;

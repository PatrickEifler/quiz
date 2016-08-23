'use strict';

import * as types from '../actions/quiz/constants';

const initialState = {
	isFetching: false,
	quiz: {}
};

const quiz = (state=initialState, action) => {
	switch (action.type) {

		case types.RECEIVE_QUIZ:
			return Object.assign({}, state, {
				isFetching: false,
				lastReceived: action.lastReceived,
				quiz: action.quiz
			});

		case types.REQUEST_QUIZ:
			return Object.assign({}, state, {
				isFetching: true
			});

		default:
			return state;
	}
};

export default quiz;

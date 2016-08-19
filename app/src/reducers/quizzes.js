'use strict';

import * as types from '../actions/quizzes/constants';

const initialState = {
	isFetching: false,
	items: []
};

const quiz = (state=initialState, action) => {
	switch (action.type) {

		case types.RECEIVE_QUIZZES:
			return Object.assign({}, state, {
				isFetching: false,
				lastReceived: action.lastReceived,
				items: action.items.map((q, i) => {
					return {
						uid: q.uid || i,
						title: q.title,
						questions: q.questions
					};
				})

			});

		case types.REQUEST_QUIZZES:
			return Object.assign({}, state, {
				isFetching: true
			});

		default:
			return state;
	}

	return state;
};

export default quiz;

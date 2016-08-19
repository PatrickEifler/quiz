'use strict';

import fetch from 'isomorphic-fetch';
import service from '../../config/service';
import * as types from './constants';

const fetchQuizzes = (dispatch, getState) => {
	dispatch(requestQuizzes());

	return fetch(`${service.url}/quizzes`).then(
		response => response.json()
	);
};

const shouldFetchQuizzes = (state) => !(state.quizzes && state.quizzes.isFetching);

const requestQuizzes = () => ({ type: types.REQUEST_QUIZZES });

const receiveQuizzes = (quizzes) => ({
	type: types.RECEIVE_QUIZZES,
	lastReceived: Date.now,
	quizzes
});

export function fetchQuizzesIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchQuizzes(getState())) {
			return fetchQuizzes(dispatch, getState).then(
				quizzes => { dispatch(receiveQuizzes(quizzes)); }
			);
		}
	};
}

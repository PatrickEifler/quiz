'use strict';

import fetch from 'isomorphic-fetch';
import service from '../../config/service';
import * as types from './constants';

const fetchQuizzes = (dispatch, getState) => {
	dispatch(requestQuizzes());

	return fetch(`${service.url}/quizzes`, {
		headers: {
			'Content-Type': 'application/json'
		},
		mode: 'cors'
	})
	.then(response => response.json())
	.catch(error => console.log('error fetching quizzes', error));
};

const shouldFetchQuizzes = (state) => !(state.quizzes && state.quizzes.isFetching);

const requestQuizzes = () => ({ type: types.REQUEST_QUIZZES });

const receiveQuizzes = (quizzes) => {
	return {
		type: types.RECEIVE_QUIZZES,
		lastReceived: Date.now(),
		items: quizzes
	};
};

export function fetchQuizzesIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchQuizzes(getState())) {
			return fetchQuizzes(dispatch, getState).then(
				quizzes => {
					dispatch(receiveQuizzes(quizzes));
				}
			);
		}
	};
}

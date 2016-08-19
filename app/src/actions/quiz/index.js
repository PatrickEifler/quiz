'use strict';

import fetch from 'isomorphic-fetch';
import service from '../../config/service';
import * as types from './constants';

const fetchQuiz = (dispatch, getState) => {
	dispatch(requestQuiz());

	return fetch(service.url + '/quiz').then(
		response => JSON.stringify(response.json())
	);
};

const shouldFetchQuiz = (state) => !(state.quiz && state.quiz.isFetching);

const requestQuiz = () => {
	return {
		type: types.REQUEST_QUIZ
	};
};

const receiveQuiz = (quiz) => {
	return {
		type: types.RECEIVE_QUIZ,
		lastReceived: Date.now,
		quiz
	};
};

export function fetchQuizIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchQuiz(getState())) {
			return fetchQuiz(dispatch, getState).then(
				quiz => { dispatch(receiveQuiz(quiz)); }
			);
		}
	};
}

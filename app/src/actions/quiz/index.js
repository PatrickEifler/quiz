import fetch from 'isomorphic-fetch';
import service from '../../config/service';
import * as types from './constants';

const fetchQuizByUid = (dispatch, getState, uid) => {
	dispatch(requestQuiz());

	return fetch(`${service.url}/quizzes/${uid}`, {
		headers: {
			'Content-type': 'application/json'
		},
		mode: 'cors'
	})
	.then(response => response.json())
	.catch(error => console.log('error fetching quiz', error));
};

const requestQuiz = () => ({ type: types.REQUEST_QUIZ });

const receiveQuiz = (quiz) => ({
	type: types.RECEIVE_QUIZ,
	lastReceived: Date.now(),
	quiz
});

export function fetchQuiz(uid) {
	const _uid = uid;
	return (dispatch, getState, _uid) => {
		return fetchQuizByUid(dispatch, getState, uid).then(
			quiz => dispatch(receiveQuiz(quiz))
		);
	};
}

export function startQuiz(uid) {
	return {
		type: types.START_QUIZ
	}
};
'use strict';

import * as types from '../actions/quiz/constants';

const initialState = {
	isFetching: false,
	quiz: {}
};

const quiz = (state=initialState, action) => {
	switch (action.type) {

		case types.RECEIVE_QUIZ:
			console.log('quiz', action)
			return Object.assign({}, state, {
				isFetching: false,
				lastReceived: action.lastReceived,
				quiz: action.quiz
				//currentQuestion: ''
			});

		case types.REQUEST_QUIZ:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.ASK_QUESTION:
			return Object.assign({}, state, {
				//get question to ask from the questions array by shuffling the array
				//store the question which have been asked in a cache
				//diff the cache against the questions array
				//return the questions object for current question
				//if there is no question left set finish_quiz flag to true
			});

		case types.ANSWER_QUESTION:
			return Object.assign({}, state, {
				//check if answer is correct or false
				//get the next question to ask for the button link
				//compute score for current question and cache it
			});

		case types.FINISH_QUIZ:
			return Object.assign({}, state, {
				//get the quiz results
				//score from each question
			});

		default:
			return state;
	}
};

export default quiz;

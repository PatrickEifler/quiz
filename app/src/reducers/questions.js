'use strict';

import * as types from '../actions/questions/constants';

const initialState = {
	items: [],
	active: {},
	isAsking: false
};

const quiz = (state=initialState, action) => {
	switch (action.type) {
		case types.ASK_QUESTION:
			console.log('ASK==========', state)
			return Object.assign({}, state, {
				items: action.questions,
				active: action.questions[0],
				isAsking: true
				//get question to ask from the questions array by shuffling the array
				//store the question which have been asked in a cache
				//diff the cache against the questions array
				//return the questions object for current question
				//if there is no question left set finish_quiz flag to true
			});

		case types.ANSWER_QUESTION:
			return Object.assign({}, state, {
				isAsking: false
				//check if answer is correct or false
				//get the next question to ask for the button link
				//compute score for current question and cache it
			});

		case types.ABORT_QUESTION:
			return Object.assign({}, state, {
				isAsking: false
				//get the quiz results
				//score from each question
			});

		default:
			return state;
	}
};

export default quiz;

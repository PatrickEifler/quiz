'use strict';

import * as types from '../actions/questions/constants';
import shuffle from '../lib/shuffle';
import diff from '../lib/diff';

const initialState = {
	items: [],
	active: {},
	isAsking: false
};

const questions = (state=initialState, action) => {
	switch (action.type) {
		case types.SET_QUESTIONS:
			return Object.assign({}, state, {
				items: action.questions
			});

		case types.ASK_QUESTION:
			let active = shuffle(action.questions).shift();

			return Object.assign({}, state, {
				items: action.questions.filter(el => el.uid !== active.uid),
				active: active,
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

export default questions;

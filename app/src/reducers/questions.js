'use strict';

import * as types from '../actions/questions/constants';
import shuffle from '../lib/shuffle';

const initialState = {
	items: [],
	active: {},
	isAsking: false,
	isLastQuestion: false
};

const questions = (state=initialState, action) => {
	switch (action.type) {
		case types.SET_QUESTIONS:
			return Object.assign({}, state, {
				items: action.questions
			});

		case types.ASK_QUESTION:
			let active = shuffle(action.questions).shift();
			let questionsLeft = action.questions.filter(el => el.uid !== active.uid);

			return Object.assign({}, state, {
				items: questionsLeft,
				active: active,
				isAsking: true,
				isLastQuestion: questionsLeft.length === 0
				//if there is no question left set finish_quiz flag to true
			});

		case types.ANSWER_QUESTION:
			console.log('answer action', action);
			return Object.assign({}, state, {

				isAsking: false
				//TODO: get action.answer
				//check if answer is correct or false
				// has correct key === is correct
				// if not evaluate label with active answer from state
				//compute score for current question and cache it
				// get the next question to ask
			});

		case types.ABORT_QUESTION:
			return Object.assign({}, state, {
				isAsking: false
			});

		default:
			return state;
	}
};

export default questions;

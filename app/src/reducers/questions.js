'use strict';

import * as types from '../actions/questions/constants';
import shuffle from '../lib/shuffle';
import evaluateAnswer from '../lib/evaluateAnswer';

const initialState = {
	items: [],
	active: {},
	isAsking: false,
	isLastQuestion: false,
	//move feedback to feedback reducer!
	feedback: null
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
				isLastQuestion: questionsLeft.length === 0,
				feedback: null
			});

		case types.ANSWER_QUESTION:

			return Object.assign({}, state, {
				feedback: {
					isCorrect: evaluateAnswer(action.answer, state.active)
				},
				isAsking: false
				// compute score for current question and cache it
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

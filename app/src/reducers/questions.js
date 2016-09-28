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
				items: action.allQuestions
			});

		case types.ASK_QUESTION:
			let active = shuffle(action.questions).shift();
			let questionsLeft = action.questions.filter(el => el.uid !== active.uid);

			return Object.assign({}, state, {
				items: questionsLeft,
				active: active,
				isAsking: true,
				isLastQuestion: questionsLeft.length === 0
			});

		case types.ANSWER_QUESTION:
			return Object.assign({}, state, {
				isAsking: false
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

'use strict';

import { ASK_QUESTION, ANSWER_QUESTION } from '../actions/questions/constants';
import evaluateAnswer from '../lib/evaluateAnswer'

const initialState = {
	isCorrect: null
};

const feedback = (state=initialState, action) => {
	switch (action.type) {
		case ASK_QUESTION: 
			return Object.assign({}, state, {
				isCorrect: null
			});

		case ANSWER_QUESTION:

			return Object.assign({}, state, {
				isCorrect: evaluateAnswer(action.answer, action.active)
			});

		default:
			return state;
	}
};

export default feedback;

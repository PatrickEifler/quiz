'use strict';

import { ANSWER_QUESTION } from '../actions/questions/constants';
import evaluateAnswer from '../lib/evaluateAnswer'

const initialState = {
	feedback: null
};

const feedback = (state=initialState, action) => {
	switch (action.type) {

		case ANSWER_QUESTION:

			return Object.assign({}, state, {
				feedback: { 
					isCorrect: evaluateAnswer(action.answer, action.active)
				}
			});

		default:
			return state;
	}
};

export default feedback;

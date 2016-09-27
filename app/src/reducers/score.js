'use strict';

import { ANSWER_QUESTION } from '../actions/questions/constants';
import evaluateAnswer from '../lib/evaluateAnswer'

const initialState = {
	amount: 0
};

const score = (state=initialState, action) => {
	switch (action.type) {

		case ANSWER_QUESTION:
			
			const isCorrect = evaluateAnswer(action.answer, action.active);

			return Object.assign({}, state, {
				amount: isCorrect ? state.amount += 1 : state.amount > 0 ? state.amount -= 1 : state.amount
			});

		default:
			return state;
	}
};

export default score;

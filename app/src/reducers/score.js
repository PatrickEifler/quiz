'use strict';

import { ANSWER_QUESTION } from '../actions/questions/constants';
import { START_QUIZ } from '../actions/quiz/constants';
import evaluateAnswer from '../lib/evaluateAnswer';

const initialState = {
	amount: 0
};

const score = (state=initialState, action) => {
	switch (action.type) {
		
		case ANSWER_QUESTION:
			const points = 100;
			const isCorrect = evaluateAnswer(action.answer, action.active);

			return Object.assign({}, state, {
				amount: isCorrect ? state.amount += points : state.amount > 0 ? state.amount -= points : state.amount
			});

		case START_QUIZ:
			return Object.assign({}, state, {
				amount: 0
			})

		default:
			return state;
	}
};

export default score;

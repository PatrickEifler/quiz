'use strict';

import * as types from '../actions/questions/constants';
import shuffle from '../lib/shuffle';
import evaluate from '../lib/evaluate';

const initialState = {
	items: [],
	active: {},
	isAsking: false,
	isLastQuestion: false,
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
			const isCorrect = () => {
				const { correct, label } = action.answer;
				const { answer } = state.active;
				if (action.answer.correct) { return true; }
				else {
					//the answer obj has no correct-key (anser type = text)
					//evaluate answer source string with answer input
					return evaluate(answer.options[0].label, label);
				}
				return false;
			}

			return Object.assign({}, state, {
				feedback: {
					isCorrect: isCorrect()
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

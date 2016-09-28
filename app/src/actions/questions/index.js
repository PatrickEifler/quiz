import * as types from './constants';

export function askQuestion() {
	return (dispatch, getState) => dispatch({
		type: types.ASK_QUESTION,
		questions: getState().questions.items
	});
}

export function answerQuestion(answer) {
	return (dispatch, getState) => dispatch({
		type: types.ANSWER_QUESTION,
		active: getState().questions.active,
		answer
	});
}

export function abortQuestion(uid) {
	return {
		type: types.ABORT_QUESTION
	}
}
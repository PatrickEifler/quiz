import * as types from './constants';

export function setQuestions() {
	return (dispatch, getState) => {
		dispatch({
			type: types.SET_QUESTIONS,
			questions: getState().quiz.item.questions
		})
	};
}

export function askQuestion(uid) {
	const _uid = uid;
	return (dispatch, getState) => {
		dispatch({
			type: types.ASK_QUESTION,
			questions: getState().questions.items
		})
	};
}

export function abortQuestion(uid) {
	return {
		type: types.ABORT_QUESTION
	}
}
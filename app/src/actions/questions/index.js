import * as types from './constants';

export function setQuestions() {
	return (dispatch, getState) => dispatch({
		type: types.SET_QUESTIONS,
		questions: getState().quiz.item.questions
	});
}

export function askQuestion() {
	return (dispatch, getState) => dispatch({
		type: types.ASK_QUESTION,
		questions: getState().questions.items
	})
}

export function answerQuestion(answer) {
	return (dispatch, getState) => {
		type: types.ANSWER_QUESTION,
		answer: answer
	}
}

export function abortQuestion(uid) {
	return {
		type: types.ABORT_QUESTION
	}
}
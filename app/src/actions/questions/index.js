import * as types from './constants';

export function setQuestions() {
	//initially get the questions from the quiz item object
	//set them on the questions object
	return (dispatch, getState) => dispatch({
		type: types.SET_QUESTIONS,
		allQuestions: getState().quiz.item.questions
	});
}

export function askQuestion() {
	//get the question items from the questions object
	return (dispatch, getState) => dispatch({
		type: types.ASK_QUESTION,
		questions: getState().questions.items
	})
}

export function answerQuestion(answer) {
	return (dispatch, getState) => dispatch({
		type: types.ANSWER_QUESTION,
		active: getState().questions.active,
		answer
	})
}

export function abortQuestion(uid) {
	return {
		type: types.ABORT_QUESTION
	}
}
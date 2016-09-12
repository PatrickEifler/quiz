import * as types from './constants';

export function askQuestion(uid) {
	const _uid = uid;
	return (dispatch, getState) => {
		dispatch({
			type: types.ASK_QUESTION,
			questions: getState().quiz.item.questions
		})
	};
}
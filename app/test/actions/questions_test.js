import { assert }  from 'chai';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../src/actions/questions';
import * as types from '../../src/actions/questions/constants';
import quiz from '../fixtures/quiz';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Questions Actions', () => {
	
	const store = mockStore({
		quiz: { item: { questions: quiz.questions } },
		questions: { items: quiz.questions }
	});

	describe('setQuestions()', () => {
		it('should dispatch the setQuestion action', () => {
			assert.deepEqual(store.dispatch(actions.setQuestions()), {
				type: types.SET_QUESTIONS,
				questions: [
					{
				      "answer": "test driven development",
				      "label": "What tdd stands for?",
				      "uid": "q1"
				    },
				    {
				      "answer": "white space in regex",
				      "label": "What /W stands for?",
				      "uid": "q2"
				    },
				    {
				      "answer": "last character in regex string",
				      "label": "What /b stands for?",
				      "uid": "q3"
				    }
				]
			})
		})
	});
	describe('askQuestion()', () => {
		it('should dispatch the askQuestion action', () => {
			assert.deepEqual(store.dispatch(actions.askQuestion()), {
				type: types.ASK_QUESTION,
				questions: [
					{
				      "answer": "test driven development",
				      "label": "What tdd stands for?",
				      "uid": "q1"
				    },
				    {
				      "answer": "white space in regex",
				      "label": "What /W stands for?",
				      "uid": "q2"
				    },
				    {
				      "answer": "last character in regex string",
				      "label": "What /b stands for?",
				      "uid": "q3"
				    }
				]
			})
		})
	});
	describe('abortQuestion()', () => {
		it('should dispatch the abortQuestion action', () => {
			assert.deepEqual(store.dispatch(actions.abortQuestion()), {
				type: types.ABORT_QUESTION
			})
		})
	});
});


import { assert } from 'chai';
import { createStore } from 'redux'; 
import { fetchQuizzesIfNeeded } from '../../src/actions/quizzes';
import rootReducer from '../../src/reducers/';


describe('Store Test', () => {
	
	const store = createStore(rootReducer)
	
	describe('Initial State', () => {
		it('should map the initial state of the quizzes reducer', () => {
			assert.deepEqual(store.getState().quizzes, {
				isFetching: false,
				quizItems: []
			});
		});
		it('should map the initial state of the quiz reducer', () => {
			assert.deepEqual(store.getState().quiz, {
				isFetching: false,
				item: {},
				hasStarted: false,
				hasFinished: false
			});
		});
		it('should map the initial state of the routing reducer', () => {
			assert.deepEqual(store.getState().routing, {
				locationBeforeTransitions: null
			});
		});
		it('should map the initial state of the questions reducer', () => {
			assert.deepEqual(store.getState().questions, {
				items: [],
				active: {},
				isAsking: false,
				isLastQuestion: false
			})
		})
		it('should map the initial state of the feedback reducer', () => {
			assert.deepEqual(store.getState().feedback, {
				isCorrect: null
			})
		})
		it('should map the initial state of the feedback reducer', () => {
			assert.deepEqual(store.getState().score, {
				amount: 0
			})
		})
	});
})
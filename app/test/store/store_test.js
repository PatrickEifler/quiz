import { createStore } from 'redux'; 
import rootReducer from '../../src/reducers/';
import { assert } from 'chai';

describe('Store Test', () => {
	it('should map the initial state of the quizzes reducer', () => {
		const store = createStore(rootReducer)
		assert.deepEqual(store.getState().quizzes, {
			isFetching: false,
			quizItems: []
		});
	});
	it('should map the initial state of the quiz reducer', () => {
		const store = createStore(rootReducer)
		assert.deepEqual(store.getState().quiz, {
			isFetching: false,
			quiz: {}
		});
	});
	it('should map the initial state of the routing reducer', () => {
		const store = createStore(rootReducer)
		assert.deepEqual(store.getState().routing, {
			locationBeforeTransitions: null
		});
	});
})
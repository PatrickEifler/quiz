import { assert } from 'chai';
import scoreReducer from '../../src/reducers/score';

describe('Score Reducer', () => {
	it('should supply the initial state', () => {
		assert.deepEqual(scoreReducer(undefined, {}), {
			amount: 0
		})
	})
	it('should add a point to the score amount', () => {
		assert.deepEqual(scoreReducer({
			amount: 0
		}, {
			type: 'ANSWER_QUESTION',
			answer: {
				correct: true,
				label: 'some answer'
			},
			active: {
				answer: {
					options: [{
						label: 'this is correct'
					}]	
				}
			}
		}), {
			amount: 1
		})
	});
	it('should remove a point from the score amount', () => {
		assert.deepEqual(scoreReducer({
			amount: 2
		}, {
			type: 'ANSWER_QUESTION',
			answer: {
				label: 'some answer'
			},
			active: {
				answer: {
					options: [{
						label: 'this is correct'
					}]	
				}
			}
		}), {
			amount: 1
		})
	});
	it('should not remove a point if score amount is already zero', () => {
		assert.deepEqual(scoreReducer({
			amount: 0
		}, {
			type: 'ANSWER_QUESTION',
			answer: {
				label: 'some answer'
			},
			active: {
				answer: {
					options: [{
						label: 'this is correct'
					}]	
				}
			}
		}), {
			amount: 0
		})
	});
});

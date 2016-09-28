import { assert } from 'chai';
import feedbackReducer from '../../src/reducers/feedback';

describe('Feedback Reducer', () => {
	it('should supply the initial state', () => {
		assert.deepEqual(feedbackReducer(undefined, {}), {
			feedback: null
		})
	});
	it('should process the feedback if answer is correct', () => {
		assert.deepEqual(feedbackReducer({
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
			feedback: {
				isCorrect: true
			}
		})
	});
	it('should process the feedback if answer is wrong', () => {
		assert.deepEqual(feedbackReducer({
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
			feedback: {
				isCorrect: false
			}
		})
	});
});

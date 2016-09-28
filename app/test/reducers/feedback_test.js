import { assert } from 'chai';
import feedbackReducer from '../../src/reducers/feedback';
import quiz from '../fixtures/quiz';

describe('Feedback Reducer', () => {
	it('should supply the initial state', () => {
		assert.deepEqual(feedbackReducer(undefined, {}), {
			isCorrect: null
		})
	});

	describe('Ask Question', () => {
		it('should reset the feedback if question is asked', () => {
			assert.deepEqual(feedbackReducer({
				isCorrect: false
			}, {
				type: 'ASK_QUESTION',
				questions: quiz.questions
			}), {
				isCorrect: null
			})
		})
	});

	describe('Answer Question', () => {
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
				isCorrect: true
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
				isCorrect: false
			})
		});
	});
	
});

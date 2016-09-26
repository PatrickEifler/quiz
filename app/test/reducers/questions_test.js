import { assert } from 'chai';
import quiz from '../fixtures/quiz';
import questionsReducer from '../../src/reducers/questions';
import shuffle from '../../src/lib/shuffle';

questionsReducer.__Rewire__('shuffle', function(arr) {
	return arr.slice();
});

describe('Questions Reducer', () => {
	it('should return the initial state', () => {
		assert.deepEqual(questionsReducer(undefined, {}), {
			items: [],
			active: {},
			isAsking: false,
			isLastQuestion: false
		});
	});

	describe('askQuestion', () => {
		it('should set an active question and remove it from the items', () => {
			assert.deepEqual(questionsReducer({
				items: quiz.questions,
				active: {},
				isAsking: false,
				isLastQuestion: false
			}, 
			{
				type: 'ASK_QUESTION',
				questions: quiz.questions
			}), 
			{
				active: {
					uid: 'q1',
					label: 'What tdd stands for?',
					answer: 'test driven development'
				},
				feedback: null,
				isAsking: true,
				isLastQuestion: false,
				items: [
					{
						uid: 'q2',
						label: 'What /W stands for?',
						answer: 'white space in regex'
					},
					{
						uid: 'q3',
						label: 'What /b stands for?',
						answer: 'last character in regex string'
					}
				]
			});
		});

		it('should set next active item and remove it from the list', () => {
			const questions = quiz.questions.slice(1, quiz.questions.length);

			assert.deepEqual(questionsReducer({
				items: quiz.questions,
				active: {},
				isAsking: false
			}, 
			{
				type: 'ASK_QUESTION',
				questions: questions
				
			}), {
				active: {
					uid: 'q2',
					label: 'What /W stands for?',
					answer: 'white space in regex'
				},
				feedback: null,
				isLastQuestion: false,
				isAsking: true,
				items: [
					{
						uid: 'q3',
						label: 'What /b stands for?',
						answer: 'last character in regex string'
					}
				]
			});
		})

		it('should set the last question flag if the list is empty', () => {
			const questions = quiz.questions.slice(2, quiz.questions.length);

			assert.deepEqual(questionsReducer({
				items: quiz.questions,
				active: {},
				isAsking: false,
			}, 
			{
				type: 'ASK_QUESTION',
				questions: questions
				
			}), {
				active: {
					uid: 'q3',
					label: 'What /b stands for?',
					answer: 'last character in regex string'
				},
				feedback: null,
				isLastQuestion: true,
				isAsking: true,
				items: []
			});
		})
	});

	describe('answerQuestion', () => {
		it('should evaluate the answer according to the correct key', () => {
			assert.deepEqual(questionsReducer({
				items: quiz.questions,
				active: {},
				isAsking: false,
			}, {
				type: 'ANSWER_QUESTION',
				answer: {
					correct: true,
					label: 'some answer'
				}
			}).feedback, {
				isCorrect: true
			})
		});
		it('should evaluate the answer according to the source and input (correct)', () => {
			assert.deepEqual(questionsReducer({
				items: quiz.questions,
				active: {
					answer: {
						options: [{
							label: 'this is correct'
						}]	
					}
				},
				isAsking: false,
			}, {
				type: 'ANSWER_QUESTION',
				answer: {
					label: 'this is correct'
				}
			}).feedback, {
				isCorrect: true
			})
		});
		it('should evaluate the answer case-insensitive to the source and input', () => {
			assert.deepEqual(questionsReducer({
				items: quiz.questions,
				active: {
					answer: {
						options: [{
							label: 'This is correct'
						}]	
					}
				},
				isAsking: false,
			}, {
				type: 'ANSWER_QUESTION',
				answer: {
					label: 'thiS iS Correct'
				}
			}).feedback, {
				isCorrect: true
			})
		})
		it('should evaluate the answer according to the source and input (wrong)', () => {
			assert.deepEqual(questionsReducer({
				items: quiz.questions,
				active: {
					answer: {
						options: [{
							label: 'this is correct'
						}]	
					}
				},
				isAsking: false,
			}, {
				type: 'ANSWER_QUESTION',
				answer: {
					label: 'this is wrong'
				}
			}).feedback, {
				isCorrect: false
			})
		})
	})

});

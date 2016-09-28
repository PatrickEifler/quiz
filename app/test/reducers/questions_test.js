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

	describe('Start Quiz', () => {
		it('should set the question items on quiz start', () => {
			assert.deepEqual(questionsReducer(undefined, {
				type: 'START_QUIZ',
				questions: quiz.questions
			}), 
			{
				isAsking: false,
				active: {},
				isLastQuestion: false,
				items: [
					{
						uid: 'q1',
						label: 'What tdd stands for?',
						answer: 'test driven development'
					},
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
			})
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
				isLastQuestion: true,
				isAsking: true,
				items: []
			});
		})
	});

	describe('answerQuestion', () => {
		it('should set isAsking key to false', () => {
			assert.isFalse(
				questionsReducer({
						items: quiz.questions,
						active: {},
						isAsking: false,
					}, 
					{
						type: 'ANSWER_QUESTION',
						answer: {
							correct: true,
							label: 'some answer'
						}
					}
				)
			.isAsking)
		});
	})
});

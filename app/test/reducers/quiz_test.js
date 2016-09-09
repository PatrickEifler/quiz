import { assert } from 'chai';
import quiz from '../fixtures/quiz';
import quizReducer from '../../src/reducers/quiz';

describe('Quiz Reducer', () => {
	it('should return the initial state', () => {
		assert.deepEqual(quizReducer(undefined, {}), {
			isFetching: false,
			item: {}
		});
	});

	it('should set the isFetching flag if the request is being send', () => {
		assert.deepEqual(quizReducer(undefined, { type: 'REQUEST_QUIZ' }), {
			isFetching: true,
			item: {}
		});
	});

	describe('getQuiz', () => {
		it('should map the quiz object', ()=> {
			assert.deepEqual(quizReducer(undefined, {
				type: 'RECEIVE_QUIZ',
				lastReceived: 1,
				quiz: quiz
			}), {
				isFetching: false,
				lastReceived: 1,
				item: {
					title: 'My test quiz',
					uid: 'quiz_1',
					questions: [
						{
							uid: 'q1',
					        answer: 'test driven development',
					        label: 'What tdd stands for?'
			      		},
			      		{
			      			uid: 'q2',
				        	answer: 'white space in regex',
				        	label: 'What /W stands for?'
				      	},
				      	{
				      		uid: 'q3',
				      		answer: 'last character in regex string',
				        	label: 'What /b stands for?'
				      	}
					]
				}
			});
		});
	});
});

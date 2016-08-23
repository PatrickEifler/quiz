import { assert } from 'chai';
import quiz from '../fixtures/quiz';
import quizReducer from '../../src/reducers/quiz';

describe('Quiz Reducer', () => {
	it('should return the initial state', () => {
		assert.deepEqual(quizReducer(undefined, {}), {
			isFetching: false,
			quiz: {}
		});
	});

	it('should set the isFetching flag if the request is being send', () => {
		assert.deepEqual(quizReducer(undefined, { type: 'REQUEST_QUIZ' }), {
			isFetching: true,
			quiz: {}
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
				quiz: {
					title: 'My test quiz',
					uid: 'quiz_1',
					questions: [
						{
			        answer: 'test driven development',
			        label: 'What tdd stands for?'
			      },
			      {
			        answer: 'white space in regex',
			        label: 'What /W stands for?'
			      },
			      {
			      	answer: 'last character in regex string',
			        label: 'What /b stands for?'
			      }
					]
				}
			});
		});
	});
});

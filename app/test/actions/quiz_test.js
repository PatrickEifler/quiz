import { assert } from 'chai';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchQuiz from '../../src/actions/quiz';
import service from '../../src/config/service';
import quiz from '../fixtures/quiz';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Quiz Actions', () => {
	describe('fetchQuiz()', () => {
		beforeEach(() => {
			nock(`${service.url}/quizzes`)
				.persist()
				.get('/quiz_1')
				.reply(200, quiz);
		});
		it('should dispatch the request and receive actions during fetch process', () => {
			const store = mockStore({
				quiz: { isFetching: false }
			});
			return store.dispatch(fetchQuiz('quiz_1')).then(() => {
				assert.lengthOf(store.getActions(), 2);
				assert.deepEqual(store.getActions()[0], { type: 'REQUEST_QUIZ' });
				assert.deepEqual(store.getActions()[1].type, 'RECEIVE_QUIZ');
				assert.deepEqual(store.getActions()[1].quiz, {
					uid: 'quiz_1',
					title: 'My test quiz',
					questions: [
						{
							label: 'What tdd stands for?',
							answer: 'test driven development',
							uid: 'q1'
						},
						{
							label: 'What /W stands for?',
							answer: 'white space in regex',
							uid: 'q2'
						},
						{
							label: 'What /b stands for?',
							answer: 'last character in regex string',
							uid: 'q3'
						}
					]
				});
			});
		});
	});
});

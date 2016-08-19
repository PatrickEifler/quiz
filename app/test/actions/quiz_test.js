import { assert }  from 'chai';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as quizActions from '../../src/actions/quiz';
import * as types from '../../src/actions/quiz/constants';
import service from '../../src/config/service';
import quizMock from '../mocks/quiz';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Quiz Actions', () => {
	describe('fetchQuiz()', () => {
		beforeEach(() => {
			nock(service.url)
				.persist()
				.get('/quiz')
				.reply(200, quizMock);
		});
		it('should fetch the quiz data', () => {
			const store = mockStore({
				quiz: {
					isFetching: false
				}
			});
			return store.dispatch(quizActions.fetchQuizIfNeeded(quizMock)).then(() => {
				assert.deepEqual(store.getActions()[0], { type: 'REQUEST_QUIZ' });
				assert.equal(store.getActions()[1].type, 'RECEIVE_QUIZ');
				assert.deepEqual(store.getActions()[1].quiz, quizMock);
			});
		});
		it('should not fetch the quiz data if already fetching', () => {
			const store = mockStore({
				quiz: {
					isFetching: true
				}
			});
			assert.equal(store.dispatch(quizActions.fetchQuizIfNeeded(quizMock)), undefined);
		});
	});
});


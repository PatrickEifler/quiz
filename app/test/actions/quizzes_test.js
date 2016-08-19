import { assert }  from 'chai';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as quizActions from '../../src/actions/quizzes';
import * as types from '../../src/actions/quizzes/constants';
import service from '../../src/config/service';
import quizMock from '../mocks/quizzes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Quiz Actions', () => {
	describe('fetchQuizzes()', () => {
		beforeEach(() => {
			nock(service.url)
				.persist()
				.get('/quizzes')
				.reply(200, quizMock);
		});
		it('should fetch the quiz data', () => {
			const store = mockStore({
				quizzes: {
					isFetching: false
				}
			});
			return store.dispatch(quizActions.fetchQuizzesIfNeeded(quizMock)).then(() => {
				assert.deepEqual(store.getActions()[0], { type: 'REQUEST_QUIZZES' });
				assert.equal(store.getActions()[1].type, 'RECEIVE_QUIZZES');
				assert.deepEqual(store.getActions()[1].quizzes, quizMock);
			});
		});
		it('should not fetch the quiz data if already fetching', () => {
			const store = mockStore({
				quizzes: {
					isFetching: true
				}
			});
			assert.equal(store.dispatch(quizActions.fetchQuizzesIfNeeded(quizMock)), undefined);
		});
	});
});


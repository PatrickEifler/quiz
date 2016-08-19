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
let store;

describe('Quiz Actions', () => {
	beforeEach(() => {
		store = mockStore({
			isFetching: false,
			items: []
		});
	});
	afterEach(() => {
		store = undefined;
	});

	describe('fetchQuiz()', () => {
		before(() => {
			nock(service.url)
				.persist()
				.get('/quiz')
				.reply(quizMock);
		});
		it('should fetch the quiz data', () => {
			return store.dispatch(quizActions.fetchQuizIfNeeded(quizMock)).then(() => {
				assert.deepEqual(store.getActions()[0], {
					type: 'REQUEST_QUIZ'
				});
			});
		});
	});
});


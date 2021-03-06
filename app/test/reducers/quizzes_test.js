import { assert }  from 'chai';
import * as types from '../../src/actions/quizzes/constants';
import quizzes from '../fixtures/quizzes';
import quizzesReducer from '../../src/reducers/quizzes';

describe('Quizzes Reducer', () => {
	it('should return the initial state', () => {
		assert.deepEqual(quizzesReducer(undefined, {}), {
			isFetching: false,
			quizItems: []
		});
	});
	it('should set the isFetching flag if the quiz is being requested', () => {
		assert.deepEqual(quizzesReducer(undefined, {
			type: types.REQUEST_QUIZZES
		}),
		{
			isFetching: true,
			quizItems: []
		});
	});

	describe('get quizzes', () => {
		it('should map the quiz data on success', () => {
			assert.deepEqual(quizzesReducer(undefined, {
				type: types.RECEIVE_QUIZZES,
				items: quizzes,
				lastReceived: 10101010
			}),
			{
				isFetching: false,
				lastReceived: 10101010,
				quizItems: quizzes
			}
			);
		});
		it('should map the quiz data on success', () => {
			assert.deepEqual(quizzesReducer({
				isFetching: false
				}, {
					type: types.RECEIVE_QUIZZES,
					items: quizzes,
					lastReceived: 10101010
				}),
				{
					isFetching: false,
					lastReceived: 10101010,
					quizItems: quizzes
				}
			);
		});
	});
});

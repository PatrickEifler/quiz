import { assert }  from 'chai';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as quizzesActions from '../../src/actions/questions';
import * as types from '../../src/actions/questions/constants';
import quiz from '../fixtures/quiz';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Questions Actions', () => {
	describe('askQuestion()', () => {
		it('should dispatch the askQuestion action', () => {
			
		})
	});
});


import { assert } from 'chai';
import shuffle from '../../src/lib/shuffle';

describe('Shuffle Test', () => {
	it('shuffles a given array and returns a copy of it', () => {
		const inputArr = [
			{
				obj1: 0
			},
			{
				obj2: 0
			},
			{
				obj3: 0
			},
			{
				obj4: 0
			},
			{
				obj5: 0
			}
		]
		assert.notDeepEqual(shuffle(inputArr), inputArr);
	})
})
import { assert } from 'chai';
import diff from '../../src/lib/diff';

describe('Diff Test', () => {
	const arr1 = [
		{
			uid: 1
		},
		{
			uid: 2
		},
		{
			uid: 3
		},
		{
			uid: 4
		},
		{
			uid: 5
		}
	];
	const arr2 = [
		{
			uid: 1
		},
		{
			uid: 2
		}
	];
	it('checks if two arrays have the same elements and returns a new arr with these elements', () => {
		assert.deepEqual(diff(arr1,arr2, (a,b) => a.uid % 2 === 0 && b.uid % 2 === 0), [
			{
				uid: 1
			},
			{
				uid: 3
			},
			{
				uid: 5
			},
			{
				uid: 1
			}
		]);
	});
	it('with optional predicate', () => {
		assert.deepEqual(diff(arr1,arr2), [
			{
				uid: 3
			},
			{
				uid: 4
			},
			{
				uid: 5
			}
		]);
	})
})
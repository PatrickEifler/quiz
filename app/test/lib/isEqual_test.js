import { assert } from 'chai';
import isEqual from '../../src/lib/isEqual';

describe('isEqual Test', () => {
	it('obj are compared by their reference (whether two objects are referring to the same location in memory)', () => {
		var a = { k: 1, c: { z: 1, x: { o: 2 } }, l: 2 };
		var b = { k: 1, l: 2, c: { x: { o: 2 }, z: 1 } };
		var c = { c: 1 };
		assert.notStrictEqual(a, b, 'not the same reference');

		assert.ok(isEqual(a, b));
		assert.ok(isEqual(a, c) === false);
	});
});
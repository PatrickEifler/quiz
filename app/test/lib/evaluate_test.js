import { assert } from 'chai';
import evaluate from '../../src/lib/evaluate';

describe('Evaluate Test', () => {
	it('evaluates in case-insensitive style a source string to input string', () => {
		const source = 'SourceStringTo{}[]TheEndOFTIME'
		assert.isTrue(evaluate(source, 'Sourcestringto{}[]theendoftime'));
	})
})
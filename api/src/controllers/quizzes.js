'use strict';

let parse = require('co-body');
let fs = require('co-fs');

module.exports = () => {
	return {
		getQuizzes: function*() {
			let quizzes = yield fs.readFile('api/src/data/quizzes.json', 'utf8');

			if (!quizzes) {
			  return this.throw(404, 'quiz file not found');
			}

			this.body = quizzes;
		}
	};
};

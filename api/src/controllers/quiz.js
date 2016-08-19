'use strict';

let parse = require('co-body');
let fs = require('co-fs');

module.exports = () => {
	return {
		getQuiz: function*() {
			let quiz = yield fs.readFile('api/src/data/quiz.json', 'utf8');

			if (!quiz) {
			  return this.throw(404, 'quiz file not found');
			}

			this.body = quiz;
		}
	};
};

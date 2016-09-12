'use strict';

let parse = require('co-body');
let fs = require('co-fs');

module.exports = (path) => {
	return {
		getQuizzes: function*() {
			let quizzes = yield fs.readFile(path, 'utf8');
			
			if (!quizzes) {
			  return this.throw(404, 'quizzes file not found');
			}

			this.body = quizzes;
		},
		getQuizByUid: function*() {
			const quizzes = yield fs.readFile(path, 'utf8');
			const quizUid = this.params.uid;

			if (!quizzes) {
				return this.throw(404, 'quizzes.json file not found');
			}

			const quiz = JSON.parse(quizzes).find(el => el.uid === quizUid);

			if (!quiz) {
				return this.throw(404, 'quiz with the requested id is missing');
			}

			this.body = quiz;
		}
	};
};

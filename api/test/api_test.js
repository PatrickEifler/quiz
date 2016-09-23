'use strict';

const assert = require('assert');
const request = require('request');
const nock = require('nock');
const http = require('http');
const app = require('../src/app');
const PORT = 3001;

describe('api test', () => {
	let server;
	let req;
	before(() => {
		server = http.createServer(app.callback()).listen(PORT);
	});
	after(() => {
		server.close();
	});

	describe('get the quizzes', () => {
		beforeEach(() => {
			req = {
        url: `http://localhost:${PORT}/quizzes`,
        method: 'GET',
        json: true
      };
		});
		it('should respond with 200', (done) => {
      request(req, (err, res, body) => {
        assert.equal(res.statusCode, 200);
        done();
      });
    });
		it('should respond with the quizzes', (done) => {
      request(req, (err, res, body) => {
        assert.deepEqual(body, [{
						uid: '1',
						title: 'My Awesome quiz',
						questions: [
							{
								answer: "JavaScript",
								label: "What JS stands for?",
								uid: "q1"
							},
							{
								answer: "B",
								label: "What is next to A?",
								uid: "q2"
							},
							{
								answer: "B",
								label: "What is next to B?",
								uid: "q3"
							},
							{
								answer: "D",
								label: "What is next to C?",
								uid: "q4"
							},
							{
								answer: "E",
								label: "What is next to D?",
								uid: "q5"
							},
							{
								answer: "F",
								label: "What is next to E?",
								uid: "q6"
							}
						]
					},
					{
						uid: '2',
						title: 'My second quiz',
						questions: [
							{
								uid: 'q1111',
								label: 'What is your name?',
								answer: 'Dog'
							}
						]
					}
				]);
       	done();
    	});
    });
	});
	describe('get the quiz by uid', () => {
		beforeEach(() => {
			req = {
				url: `http://localhost:${PORT}/quizzes/1`,
      	method: 'GET',
      	json: true
    	};
		});
		it('should return the quiz with the requested id', (done) => {
			request(req, (err, res, body) => {
				assert.deepEqual(body, {
					uid: '1',
					title: 'My Awesome quiz',
					questions: [
						{	
							uid: 'q1',
							label: 'What JS stands for?',
							answer: 'JavaScript'
						},
						{
							answer: "B",
							label: "What is next to A?",
							uid: "q2"
						},
						{
							answer: "B",
							label: "What is next to B?",
							uid: "q3"
						},
						{
							answer: "D",
							label: "What is next to C?",
							uid: "q4"
						},
						{
							answer: "E",
							label: "What is next to D?",
							uid: "q5"
						},
						{
							answer: "F",
							label: "What is next to E?",
							uid: "q6"
						}
					]
				});
				done();
			});
		});
	});
});



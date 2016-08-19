'use strict';

const assert = require('assert');
const request = require('request');
const nock = require('nock');
const http = require('http');
const app = require('../src/app');
const PORT = 3001;

describe('api test', () => {
	let server;
	before(() => {
		server = http.createServer(app.callback()).listen(PORT);
	});
	after(() => {
		server.close();
	});

	describe('get the quiz', () => {
		let req;
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
	});

});



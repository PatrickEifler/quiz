'use strict';

const koa = require('koa');
const app = koa();
const router = require('./routes');

app.use(router().routes());

app.use(function *() {
  this.body = 'Hello from koajs';
});

module.exports = app;

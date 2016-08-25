'use strict';

const koa = require('koa');
const app = koa();
const cors = require('koa-cors');
const router = require('./routes');

app.use(cors());

app.use(router().routes());

app.use(function *() {
  this.body = '';
});

module.exports = app;

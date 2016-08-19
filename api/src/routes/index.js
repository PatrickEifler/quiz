'use strict';

module.exports = () => {
  const quizCtrl = require('../controllers/quiz')();
  const router = require('koa-router')();

  router.get('/quiz/', quizCtrl.getQuiz);

  return router;
};

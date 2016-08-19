'use strict';

module.exports = () => {
  const quizCtrl = require('../controllers/quiz')();
  const router = require('koa-router')();

  router.get('/quizzes/', quizCtrl.getQuiz);

  return router;
};

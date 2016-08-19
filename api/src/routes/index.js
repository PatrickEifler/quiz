'use strict';

module.exports = () => {
  const quizzesCtrl = require('../controllers/quizzes')();
  const router = require('koa-router')();

  router.get('/quizzes/', quizzesCtrl.getQuizzes);

  return router;
};

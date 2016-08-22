'use strict';

module.exports = () => {
  const config = require('../conf');
  const quizzesCtrl = require('../controllers/quizzes')(config.quizzesPath);
  const router = require('koa-router')();

  router.get('/quizzes/', quizzesCtrl.getQuizzes);
  router.get('/quizzes/:uid', quizzesCtrl.getQuizByUid);

  return router;
};

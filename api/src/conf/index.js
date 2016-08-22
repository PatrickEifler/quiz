module.exports = {
	quizzesPath: process.env.NODE_ENV === 'production' ? 'api/src/data/quizzes.json' : 'api/test/fixtures/quizzes.json'
};

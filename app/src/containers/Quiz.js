import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, startQuiz, abortQuiz } from '../actions/quiz';
import { setQuestions, askQuestion, abortQuestion } from '../actions/questions';
import Quiz from '../components/quiz';
import Question from '../components/question';

class QuizContainer extends Component {
	constructor(props) {
		super(props);

		this.params = this.props.params;
		this.dispatch = this.props.dispatch;

		this.start = this.start.bind(this);
		this.abort = this.abort.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
		this.finishQuiz = this.finishQuiz.bind(this);
	}

	componentDidMount() {
		this.dispatch(fetchQuiz(this.params.uid));	
	}

	componentWillUnmount() {
		this.dispatch(abortQuiz());
	}


	start() {
		this.dispatch(setQuestions());
		this.dispatch(startQuiz());
		this.dispatch(askQuestion());
		//start the timer for the question 
	}

	abort() {
		this.dispatch(abortQuestion());
	}

	nextQuestion() {
		this.dispatch(askQuestion());
		//start the timer for the question
	}

	finishQuiz() {
		//TODO: dispatch finish quiz action
		//Should go to the finish screen where the scores are presented
	}

	configureQuizAction() {
		//if not started => start quiz
		//if started and time is up => next question
		let { isAsking, isLastQuestion } = this.props.questions;
		let { hasStarted } = this.props.quiz;

		let label = '';
		let callback = function() {};

		if (!hasStarted) {
			label = 'start quiz';
			callback = this.start;

		} else if (isLastQuestion) {
			label = 'finish quiz';
			callback = this.finishQuiz;
		} else if (hasStarted && isAsking) {
			label = 'next question';
			callback = this.nextQuestion;
		} 

		return {
			label: label,
			callback: callback,
			actionTagClass: 'show' //!hasStarted || !isAsking 
		}
	}

 	render() {
 		return <Quiz 
 			quiz={this.props.quiz} 
 			quizAction={this.configureQuizAction()}
 			abort={this.abort}
 			questions={this.props.questions} />;
	}
}

function mapStateToProps(state, ownProps) {
	return {
		quiz: state.quiz,
		questions: state.questions
	};
}

export default connect(mapStateToProps)(QuizContainer);

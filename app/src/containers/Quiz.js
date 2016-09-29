import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, startQuiz, abortQuiz, finishQuiz } from '../actions/quiz';
import { askQuestion, answerQuestion, abortQuestion } from '../actions/questions';
import { push } from 'react-router-redux';
import Quiz from '../components/quiz';

class QuizContainer extends Component {
	constructor(props) {
		super(props);

		this.params = this.props.params;
		this.dispatch = this.props.dispatch;

		this.start = this.start.bind(this);
		this.abort = this.abort.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
		this.answerQuestion = this.answerQuestion.bind(this);
		this.finishQuiz = this.finishQuiz.bind(this);
	}

	componentDidMount() {
		this.dispatch(fetchQuiz(this.params.uid));	
	}

	componentWillUnmount() {
		this.dispatch(abortQuiz());
	}

	start() {
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

	answerQuestion(answer) {
		this.dispatch(answerQuestion(answer))
	}

	finishQuiz() {
		this.dispatch(finishQuiz());
		this.dispatch(push(`/quizzes/${this.params.uid}/result`));
		//TODO: dispatch finish quiz action
		//Should go to the finish screen where the scores are presented
		//=> quiz/1/result
	}

	configureQuizAction() {
		let { isAsking, isLastQuestion } = this.props.questions;
		let { hasStarted } = this.props.quiz;

		let label = '';
		let callback = function() {};

		if (!hasStarted) {
			label = 'start quiz';
			callback = this.start;

		} else if (isLastQuestion) {
			label = 'show result';
			callback = this.finishQuiz;

		} else if (hasStarted && !isAsking) {
			label = 'next question';
			callback = this.nextQuestion;
		} 

		return {
			label: label,
			callback: callback,
			actionTagClass: !hasStarted || !isAsking ? 'show' : 'hide'
		}
	}

 	render() {
 		return (
			<Quiz 
	 			quiz={this.props.quiz} 
	 			quizAction={this.configureQuizAction()}
	 			abort={this.abort}
	 			questions={this.props.questions}
	 			answerQuestion={this.answerQuestion} 
	 			score={this.props.score} 
	 			feedback={this.props.feedback} />
 		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		quiz: state.quiz,
		questions: state.questions,
		score: state.score,
		feedback: state.feedback
	};
}

export default connect(mapStateToProps)(QuizContainer);

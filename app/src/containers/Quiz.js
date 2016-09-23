import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, startQuiz } from '../actions/quiz';
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
	}

	componentDidMount() {
		this.dispatch(fetchQuiz(this.params.uid)).then(() => this.dispatch(setQuestions()));	
	}

	start() {
		this.dispatch(startQuiz());
		this.dispatch(askQuestion());
		//startQuiz action gets the current question from the backend
		//gets the timer 
	}

	abort() {
		this.dispatch(abortQuestion());
	}

	configureQuizAction() {
		//if not started => start quiz
		//if started and time is up => next question

		return {
			label: 'start quiz',
			callback: this.start
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

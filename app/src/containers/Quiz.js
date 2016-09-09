import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../actions/quiz';
import Quiz from '../components/quiz';
import Question from '../components/question';

class QuizContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { params, dispatch } = this.props; 
		dispatch(fetchQuiz(params.uid));
	}

 	render() {
 		return <Quiz quiz={this.props.quiz} />;
	}
}

function mapStateToProps(state, ownProps) {
	return {
		quiz: state.quiz
	};
}

export default connect(mapStateToProps)(QuizContainer);

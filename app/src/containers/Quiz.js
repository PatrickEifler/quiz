import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quiz from '../components/quiz';
import Question from '../components/question';

class QuizContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const dispatch = this.props;
		//dispatch(fetchQuiz());
		console.log('origin', location.origin);
		console.log('params', this.props.params);
	}

 	render() {
 		return (
 			<div>
 				<Quiz />
 				<Question />
 				
 			</div>
 		);
	}
}

//<QuizResult />

function mapStateToProps(state, ownProps) {
	return {
		quiz: state.quiz
	};
}

export default connect(mapStateToProps)(QuizContainer);

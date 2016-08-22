import React, { Component } from 'react';
import Quiz from '../components/quiz';

export default class Quiz extends Component {
	constructor() {
		super(props);
	}

	componentDidMount() {
		const dispatch = this.props;
		//dispatch(fetchQuiz());
		console.log('origin', location.origin);
		console.log('params', this.props.params.uid);
	}

 	render() {
 		<Quiz />;
	}
}

function mapStateToProps(state, ownProps) {
	return {
		quiz: state.quiz
	};
}

export default connect(mapStateToProps)(Quiz);

import React from 'react';
import { connect } from 'react-redux';
import Result from '../components/result';

class ResultContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { uid, title } = this.props.quiz.item;

		return (
			<Result 
				uid={uid}
				title={title}
				score={this.props.score}>
			</Result>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		quiz: state.quiz,
		score: state.score
	};
}


export default connect(mapStateToProps)(ResultContainer);
import React from 'react';

export default class Question extends React.Component{
	constructor(props) {
		super(props);

	}
	componentWillUnmount() {
		this.props.abort();
	}
	render() {
		const { answer } = this.props.question

		console.log('answer:', answer)
		console.log('answerQuestion:', this.props.answerQuestion)

		return (
			<div className={'question', this.props.isAsking ? 'show': 'hide'}>
				<div className='label'> {this.props.question.label} </div>

			</div>
		);
	}
}

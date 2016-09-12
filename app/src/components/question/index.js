import React from 'react';

export default class Question extends React.Component{
	constructor(props) {
		super(props);

	}
	componentWillUnmount() {
		console.log('unmount')
		this.props.abort();
		//call abortQuestion action from actions/questions
	}
	render() {
		console.log('question===', this.props.abort)
		return (
			<div className={'question', this.props.show ? 'show': 'hide'}>
				{this.props.question.label}
			</div>
		);
	}
}

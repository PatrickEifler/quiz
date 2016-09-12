import React from 'react';

export default class Question extends React.Component{
	constructor(props) {
		super(props);
	}
	onComponentWillUnmount() {
		//call abortQuestion action
	}
	render() {
		return (
			<div className={'question', this.props.show ? 'show': 'hide'}>
				{this.props.question.label}
			</div>
		);
	}
}

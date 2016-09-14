import React from 'react';

export default class Question extends React.Component{
	constructor(props) {
		super(props);

	}
	componentWillUnmount() {
		this.props.abort();
	}
	render() {
		return (
			<div className={'question', this.props.isAsking ? 'show': 'hide'}>
				{this.props.question.label}
			</div>
		);
	}
}

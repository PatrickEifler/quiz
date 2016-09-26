import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	render() {
		console.log('state', this.state);
		return (
			<div className='input-wrapper'>
				<input 
					type='text'
					value={this.state.value}
					onChange={this.handleChange} />
				<button onClick={() => this.props.callback.call(this, { label: this.state.value })}>
					send
				</button>
			</div>
		);
	}
}
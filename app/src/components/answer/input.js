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
	componentDidMount() {
		this._input.focus();
	}
	render() {
		return (
			<div className='input-wrapper'>
				<input
					ref={el => this._input = el}
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
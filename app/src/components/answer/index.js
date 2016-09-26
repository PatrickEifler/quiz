import React from 'react';
import uidGen from '../../lib/uidGen';
import Input from './input';

const renderAnswerOptions = (answer, callback) => {

	const mapOptions = (options) => options.map(option =>
		<button 
			key={uidGen()}
			onClick={() => callback.call(answer, option)}> 
			{option.label} 
		</button>	
	);

	if (answer && answer.type === 'option') {
		return mapOptions(answer.options);
	} else {
		return ( <Input callback={callback} /> );
	}
}

export default (props) => {
	const { answer, callback, isAsking } = props;

	return (
		<div className={'answer', isAsking ? 'show': 'hide'}>
			<div className='answer-inner'>
				{ renderAnswerOptions(answer, callback) }
			</div>
		</div>	
	);
}


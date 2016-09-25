import React from 'react';

export default (props) => {
	const { answer, callback, isAsking } = props;
	console.log('answer:', answer)
	console.log('answerQuestion Callback:', callback)
	
	return (
		<div className={'answer', isAsking ? 'show': 'hide'}>
			implement answer option here
		</div>	
	);
}


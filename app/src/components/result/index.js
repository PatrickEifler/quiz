import React from 'react';
import Title from '../quiz/title';
import Score from '../score';

export default (props) => {
	return (
		<div className={`quiz-${props.uid} quiz-container quiz-result`}>
			<Title title={props.title} />
			<Score score={props.score} />
		</div>
	);
};

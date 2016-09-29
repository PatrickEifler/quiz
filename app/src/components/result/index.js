import React from 'react';
import { Link } from 'react-router';
import Title from '../quiz/title';
import Score from '../score';

export default (props) => {
	//TODO: Add button which links to Quizzes Overview
	return (
		<div className={`quiz-${props.uid} quiz-container quiz-result`}>
			<Title title={`Result: ${props.title}`} />
			<Score score={props.score} />
			<Link to='/quizzes'>Back to quizzes</Link>
		</div>
	);
};

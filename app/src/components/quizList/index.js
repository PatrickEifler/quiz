import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	let quizzes = props.quizItems.map((item) => {
		return (
			<li key={item.uid} className='quiz-item'>
				<Link to={`/quizzes/${item.uid}`} >
					<p>{item.title}</p>
				</Link>
			</li>
		);
	});
	return (
		<ul className='quiz-list'>{ quizzes }</ul>
	);
};

import React from 'react';

export default (props) => {
	const { item } = props.quiz;
	const { uid, title, questions } = item;
	
	return (
		<div className={`quiz-${uid}`}>
			<h2 className='quiz-title'>{title}</h2>
		</div>
	);
};

//title
//subtitle
//start button (links to :uid/questions/:uid -> first question)

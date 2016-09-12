import React from 'react';
import Question from '../question';

export default (props) => {
	const { item } = props.quiz;
	const { label, callback } = props.quizAction;
	const { title, uid, hasStarted } = item;
	
	return (
		<div className={`quiz-${uid}`}>
			<h2 className='quiz-title'>{title}</h2>
			<Question className={hasStarted ? 'show' : 'hide'}
				question={props.questions.active} 
				show={props.questions.isAsking}
				abort={props.abort} />
			<button onClick={callback} >{label}</button>
		</div>
	);
};

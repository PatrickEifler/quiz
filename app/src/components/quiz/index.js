import React from 'react';
import Question from '../question';

export default (props) => {
	const { item } = props.quiz;
	const { label, callback, actionTagClass } = props.quizAction;
	const { title, uid, hasStarted } = item;
	
	return (
		<div className={`quiz-${uid}`}>
			<h2 className='quiz-title'>{title}</h2>
			<Question className={hasStarted ? 'show' : 'hide'}
				question={props.questions.active} 
				isAsking={props.questions.isAsking}
				abort={props.abort} />
			<button className={actionTagClass}
				onClick={callback} >{label}
			</button>
		</div>
	);
};

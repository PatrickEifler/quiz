import React from 'react';
import Action from './action';
import Question from '../question';


export default (props) => {
	const { item } = props.quiz;
	const { title, uid, hasStarted } = item;
	
	return (
		<div className={`quiz-${uid}`}>
			<h2 className='quiz-title'>{title}</h2>
			
			<Question className={hasStarted ? 'show' : 'hide'}
				question={props.questions.active} 
				isAsking={props.questions.isAsking}
				abort={props.abort} />

			<Action action={props.quizAction} />
		</div>
	);
};

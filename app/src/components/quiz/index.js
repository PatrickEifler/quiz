import React from 'react';
import Action from './action';
import Question from '../question';
import Answer from '../answer';

export default (props) => {
	const { title, uid } = props.quiz.item;
	const { active, isAsking } = props.questions;

	return (
		<div className={`quiz-container-${uid}`}>
			<h2 className='quiz-title'>{title}</h2>
			<div className='quiz-body'>

				<Question className='question'
					question={active} 
					isAsking={isAsking}
					abort={props.abort} />

				<Answer className='answer' 
					answer={active.answer} 
					callback={props.answerQuestion}
					isAsking={isAsking} />
			</div>

			<Action action={props.quizAction} />
		</div>
	);
};

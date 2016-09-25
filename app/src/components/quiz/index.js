import React from 'react';
import Action from './action';
import Question from '../question';


export default (props) => {
	const { title, uid } = props.quiz.item;

	return (
		<div className={`quiz-container-${uid}`}>
			<h2 className='quiz-title'>{title}</h2>
			<div className='quiz-body'>

				<Question className='question'
					question={props.questions.active} 
					isAsking={props.questions.isAsking}
					answerQuestion={props.answerQuestion}
					abort={props.abort} />
			</div>

			<Action action={props.quizAction} />
		</div>
	);
};

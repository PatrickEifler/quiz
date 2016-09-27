import React from 'react';
import Action from './action';
import Question from '../question';
import Answer from '../answer';
import Feedback from '../feedback';
import Score from '../score';

export default (props) => {
	const { hasStarted } = props.quiz;
	const { title, uid } = props.quiz.item;
	const { active, feedback, isAsking } = props.questions;

	const renderQuizBody = () => {
		if (hasStarted) {
			return (
				<div className='quiz-body'>

					<Score score={props.score} />

					<Question className='question'
						question={active} 
						isAsking={isAsking}
						abort={props.abort} />

					<Answer className='answer' 
						answer={active.answer} 
						callback={props.answerQuestion}
						isAsking={isAsking} />

					<Feedback feedback={feedback} />
				</div>
			);
		} else {
			return (<div className='quiz-body'></div>);
		}
	};

	return (
		<div className={`quiz-${uid} quiz-container`}>
			<h2 className='quiz-title'>{title}</h2>
			
			{renderQuizBody()}

			<Action action={props.quizAction} />
		</div>
	);
};

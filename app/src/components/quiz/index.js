import React from 'react';
import Title from './title';
import Action from './action';
import Question from '../question';
import Answer from '../answer';
import Feedback from '../feedback';
import Score from '../score';


export default (props) => {
	const { hasStarted } = props.quiz;
	const { title, uid } = props.quiz.item;
	const { active, isAsking } = props.questions;

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

					<Feedback feedback={props.feedback} />
				</div>
			);
		} else {
			return (<div className='quiz-body'></div>);
		}
	};

	return (
		<div className={`quiz-${uid} quiz-container`}>
			<Title title={title} />
			
			{renderQuizBody()}

			<Action action={props.quizAction} />
		</div>
	);
};

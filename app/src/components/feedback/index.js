import React from 'react';

export default (props) => {
	const { feedback } = props;

	function renderFeedback() {
		console.log('feedback', feedback)
		if (feedback.isCorrect !== null) {
			return (
				<div className={`${feedback.isCorrect ? 'correct-answer' : 'wrong-answer'} feedback-inner`}>
					{feedback.isCorrect ? 'The answer was correct!' : 'The answer was wrong!'}
				</div>
			);
		}
	}

	return (
		<div className='feedback'>
			{renderFeedback()}
		</div>
	);
};

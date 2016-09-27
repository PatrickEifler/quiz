import evaluate from '../lib/evaluate';

export default (inputAnswer, activeQuestion) => {
	//the answer obj has no correct-key (anser type = text)
	//evaluate answer source string with answer input
	const { answer } = activeQuestion;

	return inputAnswer.correct || evaluate(answer.options[0].label, inputAnswer.label);
}

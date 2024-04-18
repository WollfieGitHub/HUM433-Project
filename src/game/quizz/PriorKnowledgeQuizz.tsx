import {usePriorKnowledgeQuizzLogic} from "./priorKnowledgeQuizz.logic";
import PriorKnowledgeQuizzQuestion from "./question/PriorKnowledgeQuizzQuestion";

const questions = [
	"How familiar are you with business theory?",
	"How familiar are you with entrepreneurship?",
	"How familiar are you with ethics?",
	"How concerned would you say you are you with the environment?",
	"How concerned would you say you are you with money?",
	"How important are social problems to you?",
]

interface PriorKnowledgeQuizzProps {
	onFinish: () => void,
}

export default function PriorKnowledgeQuizz(
	{ onFinish }: PriorKnowledgeQuizzProps,
) {
	const {
		state, actions
	} = usePriorKnowledgeQuizzLogic(onFinish, questions.length);

	return <>{
		questions.map(question =>
			<PriorKnowledgeQuizzQuestion question={question} onConfirm={actions.handleQuestionConfirmation}/>
		)[state.questionIndex]
	}</>;
}
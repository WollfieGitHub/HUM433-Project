import {usePriorKnowledgeQuizzLogic} from "./priorKnowledgeQuizz.logic";
import PriorKnowledgeQuizzQuestion from "./question/PriorKnowledgeQuizzQuestion";

const questions = [
	"Do you like quizzes?",
	"How familiar are you with business theory?",
	"Are you a cat person?",

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
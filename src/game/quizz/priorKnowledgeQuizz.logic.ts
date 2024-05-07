import {useCallback, useState} from "react";
import {values} from "./question/PriorKnowledgeQuizzQuestion";

const threshold = 2;

export type QuizzCallback = (totalRating: number) => void;

export function usePriorKnowledgeQuizzLogic(
	onFinish: QuizzCallback, questionCount: number
) {

	const [questionIndex, setQuestionIndex] = useState(0);
	const [currentRating, setCurrentRating] = useState(0);
	
	const handleQuestionConfirmation = useCallback((rating: number) => {
		setQuestionIndex(prev => {

			const badKnowledge = rating < threshold;

			if (prev === questionCount-1) {
				onFinish(badKnowledge ? (questionIndex/questionCount) : 1);
				return prev;
			} else if (badKnowledge) {
				// Finish quizz early if the user is rating the current question low
				onFinish(questionIndex / questionCount);
				return prev;
			} else {
				return prev+1;
			}
		});
		setCurrentRating(prev => prev + rating);
	}, [currentRating, onFinish, questionCount])

	const handleBack = useCallback(() => {
		setQuestionIndex(prev => prev-1)
	}, [])
	
	return {
		state: {
			questionIndex
		},
		actions: {
			handleQuestionConfirmation,
			handleBack
		},
	};
}
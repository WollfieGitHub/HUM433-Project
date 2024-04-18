import {useCallback, useState} from "react";

export function usePriorKnowledgeQuizzLogic(
	onFinish: () => void, questionCount: number
) {

	const [questionIndex, setQuestionIndex] = useState(0);
	
	const handleQuestionConfirmation = useCallback((rating: number) => {
		setQuestionIndex(prev => {
			if (prev === questionCount-1) {
				onFinish();
				return prev;
			} else {
				return prev+1;
			}
		});
	}, [onFinish, questionCount])
	
	return {
		state: {
			questionIndex
		},
		actions: {
			handleQuestionConfirmation
		},
	};
}
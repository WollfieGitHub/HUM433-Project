import {usePriorKnowledgeQuizzLogic} from "./priorKnowledgeQuizz.logic";
import PriorKnowledgeQuizzQuestion from "./question/PriorKnowledgeQuizzQuestion";
import {Box, Button, MobileStepper, useTheme} from "@mui/material";
import React, {useEffect, useMemo, useRef} from "react";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

const questions = [
	"How familiar are you with business theory?",
	"How familiar are you with entrepreneurship?",
	"How familiar are you with ethics?",
	"How concerned would you say you are you with the environment?",
	"How concerned would you say you are you with money?",
	"How important are social problems to you?",
	"",
];

interface PriorKnowledgeQuizzProps {
	onFinish: () => void,
}

export default function PriorKnowledgeQuizz(
	{onFinish}: PriorKnowledgeQuizzProps,
) {
	const {
		state, actions,
	} = usePriorKnowledgeQuizzLogic(onFinish, questions.length);

	const ref = useRef<HTMLButtonElement>(null);

	const theme = useTheme();

	useEffect(() => {
		console.log(ref.current?.offsetWidth)
	}, [ref.current]);

	const stepper = useMemo(() => (
		<MobileStepper
			variant="dots"
			steps={questions.length}
			activeStep={state.questionIndex}
			sx={{
				position: "relative", width: "100%",
				backgroundColor: "transparent",
				justifyContent: "center", gap: 5
			}}
			nextButton={<Box style={{ width: ref.current?.offsetWidth }}></Box>}
			backButton={
				<Button ref={ref} size="small" onClick={actions.handleBack} disabled={state.questionIndex === 0}>
					{theme.direction === "rtl" ? (
						<KeyboardArrowRight/>
					) : (
						<KeyboardArrowLeft/>
					)}
					Back
				</Button>
			}
		/>
	), [actions.handleBack, state.questionIndex, theme.direction, ref.current])

	return <>
		{questions.map(question =>
			<PriorKnowledgeQuizzQuestion
				question={question}
				onConfirm={actions.handleQuestionConfirmation}
				footer={stepper}
			/>,
		)[state.questionIndex]}

	</>;
}
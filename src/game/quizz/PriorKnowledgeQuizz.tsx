import {QuizzCallback, usePriorKnowledgeQuizzLogic} from "./priorKnowledgeQuizz.logic";
import PriorKnowledgeQuizzQuestion from "./question/PriorKnowledgeQuizzQuestion";
import {Box, Button, MobileStepper, useTheme} from "@mui/material";
import React, {useEffect, useRef} from "react";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

const questions = [
	"How familiar are you with entrepreneurship?",
	"How familiar are you with the different stage of the startup lifecycle?",
	"How familiar are you with the terms \"Seed, VC, Angel\", used in the context of entrepreneurship?",
];

interface PriorKnowledgeQuizzProps {
	onFinish: QuizzCallback,
}

export default function PriorKnowledgeQuizz(
	{onFinish}: PriorKnowledgeQuizzProps,
) {
	const {
		state, actions,
	} = usePriorKnowledgeQuizzLogic(onFinish, questions.length);

	const buttonRef = useRef<HTMLButtonElement>(null);

	const theme = useTheme();

	return <>
		{questions.map(question =>
			<PriorKnowledgeQuizzQuestion
				question={question}
				onConfirm={actions.handleQuestionConfirmation}
				footer={
					<MobileStepper
						variant="dots"
						steps={questions.length}
						activeStep={state.questionIndex}
						sx={{
							position: "relative", width: "100%",
							backgroundColor: "transparent",
							justifyContent: "center", gap: 5,
						}}
						nextButton={<Box style={{width: buttonRef.current?.offsetWidth || 71}}/>}
						backButton={
							<Button ref={buttonRef} size="small" onClick={actions.handleBack} disabled={state.questionIndex === 0}>
								{theme.direction === "rtl" ? (<KeyboardArrowRight/>) : (<KeyboardArrowLeft/>)}
								Back
							</Button>
						}
					/>
				}
			/>,
		)[state.questionIndex]}

	</>;
}
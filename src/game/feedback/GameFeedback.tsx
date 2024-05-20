import {Box, Button, Typography} from "@mui/material";
import {ReactNode} from "react";

interface GameFeedbackProps {
	onComplete: () => void;
	choice: number;
}

const PersonalizedFeedback: ReactNode[] = [
	<>
		You decided to prioritize the growth of your company, seeking the best solution for you and your colleagues. You
		will have new offices in a stimulating and innovative environment, and the savings you've made can be reinvested in
		other activities. You will meet other new start-ups and famous investors and you may start to collaborate with them.<br/>
		On the other hand, however, you have favored a process that is slowly altering and erasing the environment and
		traditions of the region. Part of the public opinion remains opposed to the new industrial district project, and
		this choice may weaken the public image you are trying to build for your startup. Perhaps by seeking other
		solutions, you could have found something that reconciled both your economic requirements and the desire to be a
		company attentive to the territory and its inhabitants.
	</>,
	<>
		You decided to forego this opportunity and began searching for other commercial spaces. However, this required
		additional work, time, and money. In the end, you managed to find a historic building that has been recovered and
		enhanced, now serving as a new commercial space; however, the rent is higher but still within your budget. This will
		require more careful budget management, and you will need more time and money to continue expanding the company.
		However, this choice does not only have negative aspects: public opinion has noticed your effort and courage in
		protecting the environment and the historical-cultural heritage of the region, and other companies have gotten to
		know you. You will maybe start new collaborations with them.
	</>,
];

export default function GameFeedback(
	{onComplete, choice}: GameFeedbackProps,
) {

	return <Box sx={{
		width: "80%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
		textAlign: "left",
	}}>

		<Typography variant={"h3"}>Debrief - Chapter 5 - Getting an Office</Typography>
		<Typography variant={"body1"}>
			It wasn't an easy decision given the context in which your startup finds itself. There were many factors to
			consider.
		</Typography>
		<Typography variant={"body1"}>
			{PersonalizedFeedback[choice]}
		</Typography>
		<Typography variant={"body1"}>
			This was not an easy choice, and whatever decision you made, you surely aimed to choose the best for you and your
			colleagues. However, it is important to remember that an ethical choice is always possible and that it does not
			necessarily only bring disadvantages to the company. Environmental and climate awareness is increasingly
			developing among the public opinion (fortunately!), so it is important (and right!) to also consider what impact
			our company has on the environment.
		</Typography>
		<Button variant={"contained"} onClick={onComplete}>To results...</Button>
	</Box>;
}
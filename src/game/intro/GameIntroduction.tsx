import {Box, Button, Typography} from "@mui/material";

interface GameIntroductionProps {
	onComplete: () => void;
}

export default function GameIntroduction(
	{onComplete}: GameIntroductionProps,
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

		<Typography variant={"h3"}>Introduction</Typography>
		<Typography variant={"body1"}>
			Welcome to our game !
			<br/><br/>
			This story driven game is a learning tool aimed at providing you with an insight into the various ethical
			challenges that decision-makers face every day while developing their businesses. It aims at broadening your
			vision of ethics.<br/>
			During the game you will experience feedback on the choices you made. We emphasize that this feedback
			is only here to help you reflect on the choices made and are not a grading system. As every other topic ethics is
			learnable.
		</Typography>
		<Typography variant={"h4"}>Tutorial</Typography>
		<Typography variant={"body1"}>
			In this game, you will embody the company’s decision-maker and face ethical issues threatening the company. For
			every issue, you will have to decide between multiple ways of conduct affixed on your desk in the form of three
			contracts. To help you in your decision you will be able to access both the archives (Files in the tray on your
			right) and the Ethics Committee. The archives contain lectures and real cases linked with the subjects of the
			issues. The Ethics Committee gives a broader view of the issues and putative impacts of your decision. We count on
			you to drive your company towards an ethical and thriving future !
		</Typography>
		<Typography variant={"h5"}>Disclaimer</Typography>
		<Typography variant={"body1"}>
			This game was primarily intended for engineering students who want to learn about ethical topics in
			entrepreneurship. Under no circumstances it was intended for recruiters and should not be used to assess people’s
			ethic skills. It is anonymous and no data will be held. <br/>
			It has not been created by experts in ethics nor business, the creators apologize in advance for any errors or
			incomplete information and gladly accept corrections.
		</Typography>
		<Button variant={"contained"} onClick={onComplete}>Start</Button>
	</Box>;
}
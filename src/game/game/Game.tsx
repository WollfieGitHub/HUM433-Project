import {useState} from "react";
import GameBackground from "../game-background/GameBackground";

import {Box, Button, CardMedia} from "@mui/material";
import Committee from "../committee/Committee";
import GameFeedback from "../feedback/GameFeedback";

interface GameProps {
	onComplete: (choice: number) => void;
	onChapterSelectionClick: () => void;
}

type GameState = "office" | "committee" | "feedback";

export default function Game(
	{onComplete, onChapterSelectionClick}: GameProps,
) {
	const [state, setState] = useState<GameState>("office");
	const [choice, setChoice] = useState<number>(-1);

	return <>
		<Button variant={"contained"} style={{
			position: "absolute",
			top: "100px", right: "100px",
		}} onClick={() => onChapterSelectionClick()}>
			Back to Chapter selection
		</Button>
		{ (function () {
			switch (state) {
				case "office": {
					return <GameBackground
						onCommittee={() => setState("committee")}
						onChoice={i => {
							setChoice(i);
							setState("feedback")
						}}
					/>;
				}
				case "committee": {
					return <Committee onGoBack={() => setState("office")}/>
				}
				case "feedback": {
					return <GameFeedback onComplete={() => {
						onComplete(choice)
					}} choice={choice}/>
				}
			}
		})() }
	</>
}
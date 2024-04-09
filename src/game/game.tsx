import {useGameLogic} from "./game.logic";
import {GameData, GameScore} from "./game.types";
import DisplayChapter from "./chapter-display/displayChapter";
import DisplayScore from "./score-display/displayScore";
import {useMemo} from "react";
import {Paper} from "@mui/material";

interface GameProps {
	gameData: GameData;
}

export default function Game(
	{ gameData }: GameProps,
) {
	const {state, actions} = useGameLogic(gameData);

	if (state.displayFinalScore) {
		return <DisplayScore score={state.score} />
	} else {
		return <DisplayChapter chapterData={gameData[state.currentChapterId]} onChoice={actions.handleChoice} />
	}
}
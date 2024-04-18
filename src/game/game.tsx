import {useGameLogic} from "./game.logic";
import {GameData, GameScore} from "./game.types";
import DisplayChapter from "./chapter-display/displayChapter";
import DisplayScore from "./score-display/displayScore";
import InitialDisplay from "./initial-display/initialDisplay";
import {Card} from "@mui/material";
import {GameOuterBoxStyle} from "./game.style";
import CaseFile from "./chapter-display/case-files/CaseFile";
import PriorKnowledgeQuizz from "./quizz/PriorKnowledgeQuizz";

interface GameProps {
	gameData: GameData;
}

export default function Game(
	{ gameData }: GameProps,
) {
	const {state, actions} = useGameLogic(gameData);

	return <PriorKnowledgeQuizz onFinish={() => {}}/>

	return <Card sx={GameOuterBoxStyle}>
		{ (function() {
			if (!state.initialStateDisplayed) {
				return <InitialDisplay
					startupName={gameData.startupName}
					startupDescription={gameData.startupDescription}
					onConfirm={actions.onInitialDisplayConfirm}
				/>
			} else if (state.displayFinalScore) {
				return <DisplayScore score={state.score} />
			} else {
				return <DisplayChapter
					chapterData={gameData.chapters[state.currentChapterId]}
					onChoice={actions.handleChoice}
					savings={state.score.economic}
				/>
			}
		})() }
	</Card>
}
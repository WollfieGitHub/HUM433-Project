import {useGameLogic} from "./game.logic";
import {GameData} from "./game.types";
import DisplayScore from "./score-display/displayScore";
import InitialDisplay from "./initial-display/initialDisplay";
import {Card} from "@mui/material";
import {GameOuterBoxStyle} from "./game.style";
import PriorKnowledgeQuizz from "./quizz/PriorKnowledgeQuizz";
import GameBackground from "./game-background/GameBackground";
import IntroductionToEntrepreneurship from "./introduction/IntroductionToEntrepreneurship";
import ChapterDashboard from "./chapter-dashboard/ChapterDashboard";
import GeneralDebrief from "./GeneralDebrief";

interface GameProps {
	gameData: GameData;
}

export default function Game(
	{gameData}: GameProps,
) {
	const {
		state,
		actions,
		values,
	} = useGameLogic(gameData);

	if (state.currentState.step === "Questionnaire") {
		return <PriorKnowledgeQuizz onFinish={totalRating => actions.setCurrentState({
			step: "IntroToEntrepreneurship", args: totalRating,
		})}/>;
	} else if (state.currentState.step === "IntroToEntrepreneurship") {
		return <IntroductionToEntrepreneurship
			ratio={1 - state.currentState.args}
			onRead={() => actions.setCurrentState({step: "ChapterDashboard"})}
		/>;
	} else if (state.currentState.step === "ChapterDashboard") {
		return <ChapterDashboard
			chaptersUnlockedUpTo={0}
			chapterCount={values.chapterCount}
			onChapterChosen={idx => {
				actions.setCurrentState({step: "Game"});
				actions.setCurrentChapterId(idx);
			}}
		/>;
	} else if (state.currentState.step === "GeneralDebrief") {
		return <GeneralDebrief onComplete={() => actions.setCurrentState({ step: "ChapterDashboard" })}/>;
	} else {
		return <Card sx={GameOuterBoxStyle}>
			{(function () {
				if (!state.initialStateDisplayed) {
					return <InitialDisplay
						startupName={gameData.startupName}
						startupDescription={gameData.startupDescription}
						onConfirm={actions.onInitialDisplayConfirm}
					/>;
				} else if (state.displayFinalScore) {
					return <DisplayScore score={state.score}/>;
				} else {
					return <GameBackground onComplete={() => actions.setCurrentState({ step: "GeneralDebrief" })}/>;
					// return <DisplayChapter
					// 	chapterData={gameData.chapters[state.currentChapterId]}
					// 	onChoice={actions.handleChoice}
					// 	savings={state.score.economic}
					// />
				}
			})()}
		</Card>;
	}
}
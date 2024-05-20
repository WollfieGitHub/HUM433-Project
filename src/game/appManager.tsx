import {useGameLogic} from "./game.logic";
import {GameData} from "./game.types";
import DisplayScore from "./score-display/displayScore";
import {Card} from "@mui/material";
import {GameOuterBoxStyle} from "./game.style";
import PriorKnowledgeQuizz from "./quizz/PriorKnowledgeQuizz";
import IntroductionToEntrepreneurship from "./introduction/IntroductionToEntrepreneurship";
import ChapterDashboard from "./chapter-dashboard/ChapterDashboard";
import GeneralDebrief from "./GeneralDebrief";
import Game from "./game/Game";
import GameIntroduction from "./intro/GameIntroduction";

interface GameProps {
	gameData: GameData;
}

const ScorePerChoice = [
	{environment: -8, economic: 5, social: 3},
	{environment: 8, economic: -3.5, social: 2},
];

export default function AppManager(
	{gameData}: GameProps,
) {
	const {
		state,
		actions,
		values,
	} = useGameLogic(gameData);

	if (state.currentState.step === "GameIntroduction") {
		return <GameIntroduction onComplete={() => actions.setCurrentState({step: "Questionnaire"})}/>;
	} else if (state.currentState.step === "Questionnaire") {
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
			chaptersUnlockedUpTo={4}
			chapterCount={values.chapterCount}
			onChapterChosen={idx => {
				actions.setCurrentState({step: "Game"});
				actions.setCurrentChapterId(0);
			}}
		/>;
	} else if (state.currentState.step === "Score") {
		return <DisplayScore score={state.score}/>;
	} else {
		return <Card sx={GameOuterBoxStyle}>
			<Game
				onComplete={(choice) => {
				actions.setCurrentState({step: "Score"});
				actions.setScore(ScorePerChoice[choice]);
			}}
				onChapterSelectionClick={() => {
					actions.setCurrentState({step: "ChapterDashboard"})
				}}
			/>
		</Card>;
	}
}
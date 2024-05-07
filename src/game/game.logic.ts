import {GameChoice, GameData, GameScore} from "./game.types";
import {useCallback, useEffect, useState} from "react";
import {randomUpTo} from "../utils";

const GameSteps = [
	"Questionnaire",
	"IntroToEntrepreneurship",
	"ChapterDashboard",
	"Game",
	"GeneralDebrief"
] as const
type GameStep = typeof GameSteps[number];
type GameState = {
	step: GameStep, args?: any
}

const INITIAL_SCORE = {environment: 0, economic: 3+randomUpTo(2), social: 0}

export function useGameLogic(
	gameData: GameData,
) {
	const [currentState, setCurrentState] = useState<GameState>({ step: GameSteps[0] });
	const [initialStateDisplayed, setInitialStateDisplayed] = useState(false);
	const [currentChapterId, setCurrentChapterId] = useState(0);

	const [score, setScore] = useState<GameScore>(INITIAL_SCORE);
	
	const handleChoice = useCallback(function (choice: GameChoice) {
		const { environment: dEnv, social: dSoc, economic: dEco } = choice.score;
		
		setCurrentChapterId(prev => prev+1)
		setScore(prev => ({
			economic: prev.economic + dEco,
			environment: prev.environment + dEnv,
			social: prev.social + dSoc,
		}))
		
	}, [])

	const onInitialDisplayConfirm = useCallback(() => {
		setInitialStateDisplayed(true);
	}, [])

	const chapterCount = gameData.chapters.length;
	const displayFinalScore = currentChapterId === chapterCount

	return {
		state: {
			currentChapterId,
			displayFinalScore,
			score,
			initialStateDisplayed,
			currentState
		},
		actions: {
			handleChoice,
			onInitialDisplayConfirm,
			setCurrentState,
			setCurrentChapterId
		},
		values: {
			chapterCount
		}
	};
}
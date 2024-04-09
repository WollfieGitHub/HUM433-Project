import {GameChoice, GameData, GameScore} from "./game.types";
import {useCallback, useEffect, useState} from "react";
import {randomUpTo} from "../utils";

const INITIAL_SCORE = {environment: 0, economic: 3+randomUpTo(2), social: 0}

export function useGameLogic(
	gameData: GameData,
) {
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

	const displayFinalScore = currentChapterId === gameData.chapters.length
	
	return {
		state: {
			currentChapterId,
			displayFinalScore,
			score,
			initialStateDisplayed
		},
		actions: {
			handleChoice,
			onInitialDisplayConfirm
		},
	};
}
import {GameChoice, GameData, GameScore} from "./game.types";
import {useCallback, useEffect, useState} from "react";

const INITIAL_SCORE = {environment: 0, economic: 5, social: 0}

export function useGameLogic(
	gameData: GameData,
) {

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

	const displayFinalScore = currentChapterId === gameData.length
	
	return {
		state: {
			currentChapterId,
			displayFinalScore,
			score
		},
		actions: {
			handleChoice
		},
	};
}
import {useCallback, useEffect, useState} from "react";
import {GameChapterData} from "../game.types";


export function useDisplayChapterLogic(
	chapterData: GameChapterData
) {
	const [animationSkipped, setAnimationSkipped] = useState(false);
	const [choicesDisplayed, setChoicesDisplayed] = useState(false);

	const skipAnimation = useCallback(() => {
		if (!choicesDisplayed) {
			setAnimationSkipped(true)
		}
	}, [choicesDisplayed])

	const handleWriteFinished = useCallback(() => {
		setChoicesDisplayed(true);
	}, [])

	useEffect(() => {
		setAnimationSkipped(false);
		setChoicesDisplayed(false);
	}, [chapterData.chapterDescription]);

	return {
		state: {
			animationSkipped,
			choicesDisplayed
		},
		actions: {
			skipAnimation,
			handleWriteFinished
		},
	};
}
import {useCallback, useEffect, useState} from "react";
import {GameChapterData} from "../game.types";

const INTERVAL_RATE_MS = 30;

export function useDisplayChapterLogic(
	chapterData: GameChapterData
) {
	const [description, setDescription] = useState("");
	const [displayChoices, setDisplayChoices] = useState(false);

	useEffect(() => {
		setDescription("");
		setDisplayChoices(false)
		const interval = setInterval(() => {
			setDescription(prev => {
				if (prev.length < chapterData.chapterDescription.length) {
					return chapterData.chapterDescription.substring(0, prev.length+1)
				} else {
					setDisplayChoices(true)
					clearInterval(interval)
					return prev;
				}
			})
		}, INTERVAL_RATE_MS)
		return () => clearInterval(interval);
	}, [chapterData]);
	
	const skipAnimation = useCallback(() => {
		setDisplayChoices(true);
		setDescription(chapterData.chapterDescription)
	}, [chapterData.chapterDescription])

	return {
		state: {
			description,
			displayChoices
		},
		actions: {
			skipAnimation
		},
	};
}
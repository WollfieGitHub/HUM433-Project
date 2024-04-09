import {useCallback, useEffect, useState} from "react";


export function useWriteGraduallyLogic(
	text: string,
	frequency: number,
	onWriteFinished?: () => void,
	skipAnimation?: boolean,
) {
	const [delayedText, setDelayedText] = useState("");

	useEffect(() => {
		console.log(skipAnimation);
		setDelayedText("");
		const interval = setInterval(() => {
			setDelayedText(prev => {
				if (prev.length < text.length) {
					return text.substring(0, prev.length + 1);
				} else {
					if (onWriteFinished !== undefined) {
						onWriteFinished();
					}
					clearInterval(interval);
					return prev;
				}
			});
		}, frequency);
		return () => clearInterval(interval);
	}, [onWriteFinished, skipAnimation, frequency, text]);

	useEffect(() => {
		if (skipAnimation) {
			setDelayedText(text);
			if (onWriteFinished !== undefined) {
				onWriteFinished();
			}
		}
	}, [onWriteFinished, skipAnimation, text]);

	return {
		state: {delayedText},
		actions: {},
	};
}
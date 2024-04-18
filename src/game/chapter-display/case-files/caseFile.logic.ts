import {CSSProperties, useCallback, useMemo, useState} from "react";

const NO_TRANSFORM = ""

export function useCaseFileLogic() {

	const [hovered, setHovered] = useState(false);

	const style = useMemo((): CSSProperties => {
		if (hovered) { return {
			transform: NO_TRANSFORM
		}; }
		else {
			return {
				transform: `rotate3d(2, -1, 0, ${80}deg) translateZ(100px) translateY(100px)`
			}
		}
	}, [ hovered ])

	const handleMouseEnter = useCallback(() => {
		setHovered(true)
	}, [])

	const handleMouseLeave = useCallback(() => {
		setHovered(false)
	}, [])

	return {
		state: {
			style
		},
		actions: {
			handleMouseEnter, handleMouseLeave
		},
	};
}
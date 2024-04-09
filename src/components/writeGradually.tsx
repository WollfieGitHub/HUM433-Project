import {useWriteGraduallyLogic} from "./writeGradually.logic";
import {Typography, TypographyProps} from "@mui/material";

interface WriteGraduallyProps {
	children: string;
	frequency?: number
	onWriteFinished?: () => void;
	skipAnimation?: boolean;
}

export default function WriteGradually(
	{children: text, frequency = 25, onWriteFinished, skipAnimation, ...typographyProps}: WriteGraduallyProps & TypographyProps,
) {
	const {state} = useWriteGraduallyLogic(text, frequency, onWriteFinished, skipAnimation);

	return <Typography {...typographyProps}>
		{ state.delayedText }
	</Typography>;
}
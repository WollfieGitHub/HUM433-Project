import {useCaseFileLogic} from "./caseFile.logic";
import {Box} from "@mui/material";

interface CaseFileProps {

}

export default function CaseFile(
	{}: CaseFileProps,
) {
	const {state, actions} = useCaseFileLogic();

	return <Box
		component={"div"}
		onMouseEnter={actions.handleMouseEnter}
		onMouseLeave={actions.handleMouseLeave}
		style={{
			width: 50,
			height: 100,
			backgroundColor: "#355f57",
			transition: "transform 1s ease-in-out",
			...state.style
		}}
	/>;
}
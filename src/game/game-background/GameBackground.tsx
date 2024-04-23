import GameBackgroundImageIdle from "../../resources/images/prototype_background.png";
import GameBackgroundImageCommitteeOpened from "../../resources/images/prototype_background-committee_opened.png";
import GameBackgroundImageLeftContractLifted from "../../resources/images/prototype_background-left_paper-lifted.png";
import GameBackgroundImageCenterContractLifted
	from "../../resources/images/prototype_background-center_paper-lifted.png";
import GameBackgroundImageRightContractLifted from "../../resources/images/prototype_background-right_paper-lifted.png";
import GameBackgroundImageCaseStudiesLifted from "../../resources/images/prototype_background-case_studies-lifted.png";
import {Box, CardMedia} from "@mui/material";
import {CSSProperties, useState} from "react";

interface GameBackgroundProps {

}

type GameState = "idle"
	| "committee-opened"
	| "left-contract-lifted"
	| "center-contract-lifted"
	| "right-contract-lifted"
	| "case-studies-lifted"

export default function GameBackground(
	{}: GameBackgroundProps,
) {
	const [state, setState] = useState<GameState>("idle");

	return <Box style={{position: "relative", height: "100%", width: "auto"}}>
		<HoverZone
			style={{
				position: "absolute",
				top: "19%", left: "8%",
				width: "16%", height: "46%",
			}}
			state={"committee-opened"}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				transform: "rotateZ(15deg)",
				position: "absolute",
				top: "57%", right: "-3%",
				width: "30%", height: "25%",

			}}
			state={"case-studies-lifted"}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				transform: "rotateZ(30deg)",
				position: "absolute",
				top: "82%", right: "-7%",
				width: "50%", height: "25%",

			}}
			state={"right-contract-lifted"}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				transform: "rotateZ(0deg)",
				position: "absolute",
				top: "65%", right: "40.5%",
				width: "25%", height: "40%",

			}}
			state={"center-contract-lifted"}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				transform: "rotateZ(-30deg)",
				position: "absolute",
				top: "80%", left: "-13%",
				width: "50%", height: "25%",

			}}
			state={"left-contract-lifted"}
			setState={setState}
			currState={state}
		/>
		<CardMedia component={"img"} src={(function () {
			switch (state) {
				case "case-studies-lifted":
					return GameBackgroundImageCaseStudiesLifted;
				case "left-contract-lifted":
					return GameBackgroundImageLeftContractLifted;
				case "center-contract-lifted":
					return GameBackgroundImageCenterContractLifted;
				case "right-contract-lifted":
					return GameBackgroundImageRightContractLifted;
				case "committee-opened":
					return GameBackgroundImageCommitteeOpened;
				case "idle":
					return GameBackgroundImageIdle;
			}
		})()} sx={{height: "100%", width: "auto"}}/>

	</Box>;
}

function HoverZone(
	{currState, state, setState, style}: {
		currState: GameState,
		state: GameState,
		setState: (state: GameState) => void,
		style: CSSProperties
	},
) {
	return <Box
		style={{
			...style,
			cursor: (currState === state ? "pointer" : undefined),
			backgroundColor: "transparent",
		}}
		onMouseEnter={() => setState(state)}
		onMouseLeave={() => setState("idle")}
	/>;
}
import EthicsCommittee from "../../resources/images/prototype_background-ethics_comitee.png";
import {Box, CardMedia, IconButton, Typography} from "@mui/material";
import {CSSProperties, useEffect, useState} from "react";
import {DoorBack, MeetingRoom} from "@mui/icons-material";

interface CommitteeProps {
	onGoBack: () => void;
}

type CommitteeState = "idle" | "persona1" | "persona2" | "go-back"

const Persona1Text = `
We need to support those who have raised the flag of protest, denouncing the sacrifice of land and traditions for 
the sake of economic progress. These individuals have fought hard to stop further developments and preserve the
historical and environmental heritage of the region. We should support them in their efforts and demonstrate 
ourselves as a company that respects the territory in which it was born and operates. Tradition and progress
must coexist, not destroy each other. There are many other solutions that have a much smaller social and economic
impact. Therefore, we should consider other options for our new offices, even if this could have negative 
short-term repercussions.
`
const Persona2Text = `
This new industrial district is a source of opportunity and economic growth for the region. Investors and entrepreneurs
see the project as a springboard for innovation and development, arguing that change is inevitable and that we must 
adapt to modern times. We should also embrace this wave of change: it will help us gain recognition and attract new
investors. We are a young startup, and this environment has tremendous potential for us and our growth. We should 
act quickly and rent one of these offices as soon as possible, as it would give us a huge competitive and economic
advantage.
`

export default function Committee(
	{ onGoBack }: CommitteeProps,
) {
	const [state, setState] = useState<CommitteeState>("idle");
	const [hovered, setHovered] = useState<CommitteeState>("idle");

	useEffect(() => {
		if (hovered === 'idle') {
			setState("idle")
		}
	}, [hovered]);

	return <Box
		onClick={() => { }}
		style={{position: "relative", height: "100%", width: "auto"}}
	>
		<IconButton
			size={"large"}
			style={{ position: "absolute", bottom: 0, left: 0, }}
			color={"primary"}
			onMouseEnter={() => setHovered("go-back")}
			onMouseLeave={() => setHovered("idle")}
			onClick={() => onGoBack()}
		>
			{ hovered === "go-back" ? <MeetingRoom style={{ fontSize: "6rem" }}/> : <DoorBack style={{ fontSize: "6rem" }}/> }
		</IconButton>
		<HoverZone
			style={{ left: "25%", right: "60%", top: "25%", bottom: "40%" }}
			hovered={hovered === "persona1"}
			onEnter={() => setHovered("persona1")}
			onLeave={() => setHovered("idle")}
			onClick={() => setState("persona1")}
		/>
		<HoverZone
			style={{ right: "30%", left: "55%", top: "25%", bottom: "40%" }}
			hovered={hovered === "persona2"}
			onEnter={() => setHovered("persona2")}
			onLeave={() => setHovered("idle")}
			onClick={() => setState("persona2")}
		/>
		<HoverZone
			style={{ right: "85%", left: "0", top: "80%", bottom: "0" }}
			hovered={hovered === "go-back"}
			onEnter={() => setHovered("go-back")}
			onLeave={() => setHovered("idle")}
			onClick={() => onGoBack()}
		/>
		<CardMedia component={"img"} src={(function () {
			return EthicsCommittee;
		})()}  sx={{height: "100%", width: "auto"}}/>
		{ hovered === "persona1" && <Box sx={{
			padding: 0.5,
			position: "absolute",
			left: "2.5%", right: "10%",
			top: "60%", bottom: "auto",
			backgroundColor: "white",
			borderRadius: "8px",
			zIndex: 40,
		}} >
			<Box style={{
				position: "absolute",
				left: "31%", width: "10%",
				transform: "rotateZ(45deg)",
				top: "-10%", aspectRatio: "1/1",
				backgroundColor: "white",
				zIndex: -2
			}}/>
			<Typography>{ Persona1Text }</Typography>
		</Box> }
		{ hovered === "persona2" && <Box sx={{
			padding: 0.5,
			position: "absolute",
			left: "10%", right: "2.5%",
			top: "60%", bottom: "auto",
			backgroundColor: "white",
			borderRadius: "8px",
			zIndex: 40,
		}} >
			<Box style={{
				position: "absolute",
				right: "38%", width: "10%",
				transform: "rotateZ(45deg)",
				top: "-10%", aspectRatio: "1/1",
				backgroundColor: "white",
				zIndex: -2
			}}/>
			<Typography>{ Persona2Text }</Typography>
		</Box> }
	</Box>;
}

function HoverZone({ style, onEnter, onLeave, onClick, hovered, label } : {
	style?: CSSProperties;
	hovered: boolean;
	onEnter: () => void;
	onLeave: () => void;
	onClick: () => void;
	label?: string;
}) {
	return <Box
		style={{
			...style,
			position: "absolute",
			cursor: (hovered ? "pointer" : undefined),
			backgroundColor: "transparent",
		}}
		onMouseEnter={() => onEnter()}
		onMouseLeave={() => onLeave()}
		onClick={() => onClick()}
	>
		{ hovered && label && <Box style={{
			bottom: 0,
			left: 0,
			backgroundColor: "white"
		}}>
			<Typography>
				{ label }
			</Typography>
		</Box> }
	</Box>
}
import GameBackgroundImageIdle from "../../resources/images/prototype_background.png";
import GameBackgroundImageCommitteeOpened from "../../resources/images/prototype_background-committee_opened.png";
import GameBackgroundImageLeftContractLifted from "../../resources/images/prototype_background-left_paper-lifted.png";
import GameBackgroundImageCenterContractLifted
	from "../../resources/images/prototype_background-center_paper-lifted.png";
import GameBackgroundImageRightContractLifted from "../../resources/images/prototype_background-right_paper-lifted.png";
import GameBackgroundImageCaseStudiesLifted from "../../resources/images/prototype_background-case_studies-lifted.png";
import {Box, Button, CardMedia, List, ListItem, ListItemButton, Typography, useTheme} from "@mui/material";
import {CSSProperties, useState} from "react";

interface GameBackgroundProps {
	onCommittee: () => void;
	onChoice: (i: number) => void;
}

type GameState = "idle"
	| "committee-opened"
	| "left-contract-lifted"
	| "center-contract-lifted"
	| "right-contract-lifted"
	| "case-studies-lifted"
	| "committee-entered"

const Choices = [
	"Rent an office in the new industrial district (USD 2,000 per month)?",
	"Explore other solutions, even though they will be more expensive?",
];

const CaseStudies = [
	{
		title: "London’s lost mega-motorway: the eight-lane ring road that would have destroyed much of the city",
		url: "https://www.theguardian.com/uk-news/2022/dec/13/londons-lost-mega-motorway-the-eight-lane-ring-road-that-would-have-destroyed-much-of-the-city",
	}, {
		title: "The Amazon Rain Forest Is Nearly Gone",
		url: "https://time.com/amazon-rainforest-disappearing/",
	}, {
		title: "Fusion nucléaire",
		url: "https://wayback.archive-it.org/9650/20200224030537/http://p3-raw.greenpeace.org/luxembourg/fr/campaigns/nucleaire/fusion-nucl-eacute-aire/",
	}, {
		title: "Uniterre soutient la ferme de Bassenges, menacée de réaffectation, et s’inquiète de l’agriwashing de l’EPFL",
		url: "https://uniterre.ch/fr/uniterre-soutient-la-ferme-de-bassenges-menacee-de-reaffectation-et-sinquiete-de-lagriwashing-de-lepfl/",
	}, {
		title: "Romania wins $6.7bn litigation over Rosia Montana gold mining project",
		url: "https://www.intellinews.com/romania-wins-6-7bn-litigation-over-rosia-montana-gold-mining-project-316176/",
	},
];

export default function GameBackground(
	{onCommittee, onChoice}: GameBackgroundProps,
) {
	const [state, setState] = useState<GameState>("idle");
	const [currentChoice, setCurrentChoice] = useState<number | null>(null);
	const [showInitialSituation, setShowInitialSituation] = useState(true);
	const [showCaseStudy, setShowCaseStudy] = useState(false);

	const theme = useTheme();

	return <Box
		onClick={() => {
		}}
		style={{position: "relative", height: "100%", width: "auto"}}
	>
		<HoverZone
			style={{
				position: "absolute",
				top: "19%", left: "8%",
				width: "16%", height: "46%",
			}}
			label={"Ethics committee"}
			labelOffsetBottom={40}
			labelOffsetLeft={20}
			onClick={onCommittee}
			state={"committee-opened"}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				position: "absolute",
				top: "57%", right: "-3%",
				width: "30%", height: "25%",
			}}
			rotateZ={15}
			label={"Case studies"}
			onClick={() => setShowCaseStudy(true)}
			state={"case-studies-lifted"}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				position: "absolute",
				top: "82%", right: "-7%",
				width: "50%", height: "25%",
			}}
			rotateZ={30}
			label={"Choice 1"}
			labelOffsetBottom={0}
			labelOffsetLeft={-200}
			state={"right-contract-lifted"}
			onClick={() => setCurrentChoice(1)}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				position: "absolute",
				top: "65%", right: "40.5%",
				width: "25%", height: "40%",
			}}
			rotateZ={0}
			label={"Situation"}
			onClick={() => setShowInitialSituation(true)}
			state={"center-contract-lifted"}
			setState={setState}
			currState={state}
		/>
		<HoverZone
			style={{
				position: "absolute",
				top: "80%", left: "-13%",
				width: "50%", height: "25%",
			}}
			rotateZ={-30}
			label={"Choice 2"}
			labelOffsetBottom={0}
			labelOffsetLeft={200}
			state={"left-contract-lifted"}
			onClick={() => setCurrentChoice(0)}
			setState={setState}
			currState={state}
		/>
		{currentChoice !== null && <Box
			id={"contract"}
			style={{
				position: "absolute",
				top: "2.5%", bottom: "2.5%",
				right: "20%", left: "20%",
				backgroundColor: "white",
				borderRadius: "4px",
				display: "flex", flexDirection: "column",
				justifyContent: "center", alignItems: "center",
				gap: 20,
			}}
		>
			{Choices[currentChoice]}
			<Box style={{
				display: "flex", flexDirection: "row",
				justifyContent: "center", alignItems: "center",
				gap: 20,
			}}>
				<Button
					onClick={() => setCurrentChoice(null)}
					color={"secondary"}
					variant={"text"}
				>
					Close
				</Button>
				<Button
					onClick={() => onChoice(currentChoice)}
					variant={"outlined"}
				>
					Choose
				</Button>
			</Box>
		</Box>}
		{showCaseStudy && <Box
			id={"initial-situation"}
			style={{
				position: "absolute",
				top: "2.5%", bottom: "2.5%",
				right: "20%", left: "20%",
				backgroundColor: "white",
				padding: 10,
				textAlign: "left",
				borderRadius: "4px",
				gap: 10,
				display: "flex", flexDirection: "column",
				justifyContent: "center", alignItems: "center",
			}}
		>
			<List style={{
				padding: 0,
				borderRadius: "8px",
				border: `1px solid ${theme.palette.primary.main}`
			}}>
				{CaseStudies.map((caseStudy, i) =>
					<ListItem key={i}>
						<ListItemButton href={caseStudy.url} target={"_blank"}>
							{ `• ${caseStudy.title}` }
						</ListItemButton>
					</ListItem>,
				)}
			</List>
			<Button variant={"outlined"} style={{margin: 10}} onClick={() => setShowCaseStudy(false)}>
				Close
			</Button>
		</Box>}
		{showInitialSituation && <Box
			id={"initial-situation"}
			style={{
				position: "absolute",
				top: "2.5%", bottom: "2.5%",
				right: "20%", left: "20%",
				backgroundColor: "white",
				padding: 10,
				textAlign: "left",
				borderRadius: "4px",
				display: "flex", flexDirection: "column",
				justifyContent: "center", alignItems: "center",
			}}
		>
			<Typography variant={"h5"} style={{margin: 10}}>
				Situation
			</Typography>
			<Typography variant={"body1"} style={{margin: 10}}>
				As a newly established startup, your budget is quite limited, and you need to find cost-effective solutions for
				our office space. You've come across a new industrial district just outside the city, where new commercial
				spaces
				are being sold at very competitive prices to kickstart the area's development. However, upon further research,
				you've learned that to build this new district, part of the semi-abandoned homes and farms of two small rural
				villages of farmers and herders were demolished. These two villages represent an important cultural and
				environmental heritage of the region. Moreover, these people found themselves living in a completely disrupted
				environment, and the landscape and fauna have suffered greatly from this change. The public opinion is
				completely
				divided.
				<br/>
				What should you do?
			</Typography>
			<Button variant={"outlined"} style={{margin: 10}} onClick={() => setShowInitialSituation(false)}>
				Close
			</Button>
		</Box>}
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
	{currState, state, setState, style, onClick, label, rotateZ, labelOffsetBottom, labelOffsetLeft}: {
		currState: GameState,
		state: GameState,
		setState: (state: GameState) => void,
		style: CSSProperties,
		onClick?: () => void;
		label?: string;
		rotateZ?: number;
		labelOffsetBottom?: number;
		labelOffsetLeft?: number;
	},
) {
	const hovered = currState === state;
	return <>
		<Box
			style={{
				...style,
				transform: (rotateZ ? `rotateZ(${rotateZ < 0 ? "-" : "+"}${Math.abs(rotateZ)}deg)` : undefined),
				cursor: (currState === state ? "pointer" : undefined),
				backgroundColor: "transparent",
			}}
			onClick={onClick}
			onMouseEnter={() => setState(state)}
			onMouseLeave={() => setState("idle")}
		>
			{hovered && label && <Box style={{
				position: "relative",
				transform: (rotateZ ? `rotateZ(${rotateZ < 0 ? "+" : "-"}${Math.abs(rotateZ)}deg)` : undefined),
				borderRadius: "50px",
				bottom: labelOffsetBottom ?? 0,
				left: labelOffsetLeft ?? 0,
				backgroundColor: "white",
			}}>
				<Typography>
					{label}
				</Typography>
			</Box>}
		</Box>

	</>;
}
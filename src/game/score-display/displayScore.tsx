import {GameScore} from "../game.types";
import {Card, Typography, useTheme} from "@mui/material";
import {ScoreOuterBoxStyle} from "./displayScore.style";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
} from "chart.js"
import {ChartProps, Radar} from "react-chartjs-2";

interface DisplayScoreProps {
	score: GameScore
}
ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);


export default function DisplayScore(
	{ score }: DisplayScoreProps,
) {
	const theme = useTheme();

	const data: ChartProps<"radar">["data"] = {
		labels: Object.keys(score),
		datasets: [
			{
				label: "Score",
				data: Object.values(score),
				borderColor: `${theme.palette.primary.main}FF`,
				backgroundColor: `${theme.palette.primary.main}33`,
				borderWidth: 1,
			}
		]
	}

	return <div style={ScoreOuterBoxStyle}>
		{ (Object.keys(score) as Array<keyof typeof score>).map(key => (
			<Typography variant={"h6"}>{ `${key} score: ${score[key]}` }</Typography>
		)) }
		<div style={{ width: "500px", height: "500px" }}>
			<Radar data={data}/>
		</div>
	</div>;
}
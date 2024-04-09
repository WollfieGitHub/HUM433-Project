import {GameScore} from "../game.types";
import {Card, Typography} from "@mui/material";
import {ScoreOuterBoxStyle} from "./displayScore.style";

interface DisplayScoreProps {
	score: GameScore
}

export default function DisplayScore(
	{ score }: DisplayScoreProps,
) {
	return <Card sx={ScoreOuterBoxStyle}>
		{ (Object.keys(score) as Array<keyof typeof score>).map(key => (
			<Typography variant={"h6"}>{ `${key} score: ${score[key]}` }</Typography>
		)) }
	</Card>;
}
import {Box, Card, CardActionArea, Grid, Paper, Typography, useTheme} from "@mui/material";
import React from "react";
import {randomUpTo} from "../../utils";

interface ChapterDashboardProps {
	chapterCount: number;
	onChapterChosen: (chapterIndex: number) => void;
	chaptersUnlockedUpTo: number;
}

function range(from: number, to: number) {
	const result = []
	for (let i = from; i < to; i++) {
		result.push(i);
	}
	return result;
}

const chapterNames = [
	"Idea Generation and Validation",
	"Building a Team",
	"Creating a Business Plan",
	"Product Development",
	"Getting an Office",
	"Funding and Investment",
	"Market Entry and Launch",
	"Customer Acquisition and Retention",
	"Growth and Scaling",
	"Maturity and Exit Strategy",
]

export default function ChapterDashboard(
	{ chapterCount, onChapterChosen, chaptersUnlockedUpTo }: ChapterDashboardProps,
) {
	const fakeChapterCount = 10 - chapterCount;

	const theme = useTheme();

	console.log(theme.palette.primary.main)

	return <Paper style={{ width: "70%", padding: 20 }}>
		<Grid container columnGap={5} rowGap={5} style={{ alignItems: "center", justifyContent: "center" }}>
			{ range(0, chapterCount+fakeChapterCount).map(chapterIdx => {
				const disabled = chapterIdx > chaptersUnlockedUpTo;
				const last = chapterIdx === chaptersUnlockedUpTo;

				return <Grid item xs={2} style={{aspectRatio: "1/1"}}>
					<Card
						style={{
							padding: 2,
							height: "100%",
							border: `solid 2px ${(disabled) ? "#AAAAAA" : theme.palette.primary.main}`,
							opacity: (disabled || !last ? 0.6 : 1),
							backgroundColor: (disabled ? "#EEEEEE" : (last ? theme.palette.primary.main + "20" : undefined))
						}}
					>
						<CardActionArea
							disabled={disabled || !last}
							style={{width: "100%", height: "100%"}}
							onClick={() => {
								if (chapterIdx < chapterCount) {
									onChapterChosen(chapterIdx);
								} else {
									onChapterChosen(randomUpTo(chapterCount));
								}
							}}
						>
							<Typography
								variant={"h5"}
								component={"span"}
								color={disabled ? theme.palette.text.disabled : undefined}
							>
								{`Chapter ${chapterIdx + 1}:`}
								<br/>
								<Typography component={"span"} variant={"h6"}>
									{chapterNames[chapterIdx]}
								</Typography>
							</Typography>
						</CardActionArea>
					</Card>
				</Grid>;
			}) }
		</Grid>
	</Paper>;
}
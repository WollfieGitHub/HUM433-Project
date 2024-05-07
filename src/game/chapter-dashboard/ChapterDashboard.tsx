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

export default function ChapterDashboard(
	{ chapterCount, onChapterChosen, chaptersUnlockedUpTo }: ChapterDashboardProps,
) {
	const fakeChapterCount = 10 - chapterCount;

	const theme = useTheme();

	return <Paper style={{ width: "70%", padding: 20 }}>
		<Grid container columnGap={5} rowGap={5}>
			{ range(0, chapterCount+fakeChapterCount).map(chapterIdx =>
				<Grid item xs={2} style={{ aspectRatio: "1/1" }}>
					<Card
						style={{
							height: "100%",
							border: `solid 2px ${(chapterIdx > chaptersUnlockedUpTo) ? "#AAAAAA" : theme.palette.primary.main}`,
							opacity: (chapterIdx > chaptersUnlockedUpTo ? 0.6 : 1),
							backgroundColor: (chapterIdx > chaptersUnlockedUpTo ? "#EEEEEE" : undefined)
						}}
					>
						<CardActionArea
							disabled={chapterIdx > chaptersUnlockedUpTo}
							style={{ width: "100%", height: "100%" }}
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
								color={chapterIdx > chaptersUnlockedUpTo ? theme.palette.text.disabled : undefined}
							>
								{ `Chapter ${chapterIdx+1}` }
							</Typography>
						</CardActionArea>
					</Card>
				</Grid>
			) }
		</Grid>
	</Paper>;
}
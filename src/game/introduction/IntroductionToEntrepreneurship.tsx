import {Box, Button, Card, Typography, useTheme} from "@mui/material";

import lectureParts from "../../resources/entrepreneurship.json"
import React, {useCallback, useEffect, useState} from "react";

interface IntroductionToEntrepreneurshipProps {
	ratio: number;
	onRead: () => void;
}

export default function IntroductionToEntrepreneurship(
	{ onRead, ratio }: IntroductionToEntrepreneurshipProps,
) {
	const [page, setPage] = useState(0);

	const maxPageIndex = Math.ceil(lectureParts.length * ratio);

	useEffect(() => {
		if (maxPageIndex === 0) {
			onRead();
		}
	}, [maxPageIndex, onRead]);

	const theme = useTheme();

	const handleNextPage = useCallback(() => {
		setPage(prev => {
			if (prev === maxPageIndex-1) {
				onRead();
				return prev;
			} else {
				return prev+1;
			}
		})
	}, [maxPageIndex, onRead])
	
	return <Card
		sx={{
			backgroundColor: theme.palette.primary.main + "10",
			padding: 7.5,
			transition: "opacity 300ms ease-in-out",
			boxSizing: "border-box",
			maxWidth: 1000,
		}}
	>
		<Typography variant={"body1"} textAlign={"left"}>
			{ lectureParts[(lectureParts.length - maxPageIndex) + page] }
		</Typography>
		<Button onClick={handleNextPage}>
			{ page !== maxPageIndex-1 ? "Next" : "Confirm" }
		</Button>
	</Card>;
}
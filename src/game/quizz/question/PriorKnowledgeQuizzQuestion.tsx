import {Box, Button, Card, Radio, Typography, useTheme} from "@mui/material";
import {ChangeEvent, ReactNode, useEffect, useState} from "react";

interface PriorKnowledgeQuizzQuestionProps {
	question: string,
	onConfirm: (rating: number) => void;
	footer: ReactNode;
}

const INITIAL_RADIO_SIZE = 20;
const RADIO_SIZE_MULTIPLIER = 5;

export const values = [0, 1, 2, 3, 4];

export default function PriorKnowledgeQuizzQuestion(
	{question, onConfirm, footer}: PriorKnowledgeQuizzQuestionProps,
) {
	const [mounted, setMounted] = useState(false);
	const [displayedQuestion, setDisplayedQuestion] = useState<string|null>(null);

	const [selectedValue, setSelectedValue] = useState<number|null>(null);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(parseInt(event.target.value, 10));
	};

	useEffect(() => {
		setMounted(false);
		setSelectedValue(null);

		return () => setMounted(false);
	}, [question]);

	useEffect(() => {
		setTimeout(() => {
			setMounted(true);
			setDisplayedQuestion(question)
		}, 200);

	}, [mounted]);

	const theme = useTheme();

	return <Card
		style={{ opacity: (mounted ? 1 : 0) }}
		sx={{
			backgroundColor: theme.palette.primary.main + "10",
			padding: 7.5,
			transition: "opacity 300ms ease-in-out",
			boxSizing: "border-box",
			width: "80%"
		}}
	>
		<Typography variant={"h3"}>{displayedQuestion}</Typography>
		<Box sx={{
			display: "flex", flexDirection: "row",
			justifyContent: "center", alignItems: "center",
			marginTop: 1,
		}}>
			<Typography variant={"h6"}>Not at all</Typography>
			<Box>
				{values.map((value, i) =>
					<Radio
						style={{ opacity: 4/8 + (i / 8) }}
						value={value.toString()}
						checked={selectedValue === value}
						onChange={handleChange}
						key={i}
						sx={{
							"& .MuiSvgIcon-root": {
								fontSize: INITIAL_RADIO_SIZE + i * RADIO_SIZE_MULTIPLIER,
							},
						}}
					/>,
				)}

			</Box>
			<Typography variant={"h6"}>A lot</Typography>
		</Box>
		<Typography variant={"subtitle1"} m={1} color={"text.secondary"}>
			Your answers will not be registered and are for your eyes only.
		</Typography>
		<Button
			disabled={selectedValue === null}
			size={"large"}
			variant={"contained"}
			onClick={() => onConfirm(selectedValue!)}
			sx={{borderRadius: "25px", marginTop: 5}}
		>
			Confirm
		</Button>
		<Box style={{
			display: "flex", flexDirection: "column",
			justifyContent: "center", alignItems: "center",
			width: "100%",
		}}>
			{ footer }
		</Box>
	</Card>;
}
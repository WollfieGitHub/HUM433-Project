import {Box, Button, Typography} from "@mui/material";

interface InitialDisplayProps {
	startupName: string;
	startupDescription: string;
	onConfirm: () => void;
}

export default function InitialDisplay(
	{ startupName, startupDescription, onConfirm }: InitialDisplayProps,
) {
	return <Box sx={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
		<Typography variant={"h3"}>You just created:</Typography>
		<Typography variant={"h2"}>{ startupName }</Typography>
		<Typography variant={"h6"}>{ startupDescription }</Typography>
		<Button variant={"contained"} onClick={onConfirm}>Start</Button>
	</Box>
}
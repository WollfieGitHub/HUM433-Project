import React from "react";
import {useTheme} from "@mui/material";

const CORNER_SIZE = 200;
const CORNER_INCREMENT = 20;

export default function CornerDecoration() {
	const theme = useTheme();

	const baseIndex = -4;

	return <div style={{
		overflow: "hidden", position: "absolute",
		pointerEvents: "none",
		top:0, left: 0, width: "100%", height: "100%"
	}}>
	<div style={{
		overflow: "hidden",
		position: "absolute", top: -CORNER_SIZE / 2, right: -CORNER_SIZE / 2,
		height: CORNER_SIZE, width: CORNER_SIZE,
		borderRadius: "50%",
		backgroundColor: theme.palette.primary.main,
		zIndex: baseIndex,
	}}/>

	<div style={{
		overflow: "hidden",
		position: "absolute", top: -(CORNER_SIZE + CORNER_INCREMENT) / 2, right: -(CORNER_SIZE + CORNER_INCREMENT) / 2,
		height: CORNER_SIZE + CORNER_INCREMENT, width: CORNER_SIZE + CORNER_INCREMENT,
		borderRadius: "50%",
		backgroundColor: "white",
		zIndex: baseIndex-1,
	}}/>

	<div style={{
		overflow: "hidden",
		position: "absolute",
		top: -(CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25)) / 2,
		right: -(CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25)) / 2,
		height: CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25),
		width: CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25),
		borderRadius: "50%",
		backgroundColor: theme.palette.primary.main,
		zIndex: baseIndex-2,
	}}/>

	<div style={{
		overflow: "hidden",
		position: "absolute", top: -CORNER_SIZE / 4, left: -CORNER_SIZE / 4,
		height: CORNER_SIZE / 2, width: CORNER_SIZE / 2,
		borderRadius: "50%",
		backgroundColor: theme.palette.primary.main,
		zIndex: baseIndex,
	}}/>

	<div style={{
		overflow: "hidden",
		position: "absolute", bottom: -CORNER_SIZE / 2, left: -CORNER_SIZE / 2,
		height: CORNER_SIZE, width: CORNER_SIZE,
		borderRadius: "0", transform: "rotateZ(45deg)",
		backgroundColor: theme.palette.primary.main,
		zIndex: baseIndex,
	}}/>
</div>

}
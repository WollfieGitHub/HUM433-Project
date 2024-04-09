import {SxProps, Theme} from "@mui/material";
import {CSSProperties} from "react";

export const ChapterOuterBoxStyle: CSSProperties = {
	width: "100%", height: "100%",
	display: "flex", flexDirection: "column",
	justifyContent: "center", alignItems: "center"
}

export const ChapterButtonBoxStyle: SxProps<Theme> = {
	display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
	marginTop: 10
}
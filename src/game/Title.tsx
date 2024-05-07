import {Typography, useTheme} from "@mui/material";
import React, {useEffect, useState} from "react";

interface TitleProps {

}

export default function Title(
	{}: TitleProps,
) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setTimeout(() => setMounted(true), 300)
	}, [mounted]);

	const theme = useTheme();

	return <Typography variant={"h5"} component={"span"} style={{
		transition: "transform 600ms ease-in-out",
		transform: (mounted ? "translateY(0)" : "translateY(-200px)")
	}}>
		{"HUM433 - How People Learn - "}
		<span style={{color: theme.palette.primary.main}}>Designing Learning Tools</span>
	</Typography>
}
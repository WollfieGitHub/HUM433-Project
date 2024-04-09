import {GameChapterData, GameChoice} from "../game.types";
import {Box, Button, Card, Typography} from "@mui/material";
import {useDisplayChapterLogic} from "./displayChapter.logic";
import {ChapterButtonBoxStyle, ChapterOuterBoxStyle} from "./displayChapter.style";

interface DisplayChapterProps {
	chapterData: GameChapterData;
	onChoice: (choice: GameChoice) => void;
}

export default function DisplayChapter(
	{ chapterData, onChoice }: DisplayChapterProps,
) {
	const { state, actions } = useDisplayChapterLogic(chapterData)

	return <Card onClick={actions.skipAnimation} sx={ChapterOuterBoxStyle}>
		<Typography variant={"h6"}>{ state.description }</Typography>
		<Box sx={ChapterButtonBoxStyle}>
			{ state.displayChoices && chapterData.choices.map(choice => (
				<Button variant={"text"} onClick={() => onChoice(choice)}>
					{ choice.choiceDescription }
				</Button>
			)) }
		</Box>
	</Card>;
}
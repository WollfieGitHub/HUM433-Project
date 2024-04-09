import {GameChapterData, GameChoice} from "../game.types";
import {Box, Button, Card, Typography} from "@mui/material";
import {useDisplayChapterLogic} from "./displayChapter.logic";
import {ChapterButtonBoxStyle, ChapterOuterBoxStyle} from "./displayChapter.style";
import WriteGradually from "../../components/writeGradually";
import {formatThousands} from "../../utils";

interface DisplayChapterProps {
	chapterData: GameChapterData;
	onChoice: (choice: GameChoice) => void;
	savings: number;
}

export default function DisplayChapter(
	{ chapterData, onChoice, savings }: DisplayChapterProps,
) {
	const { state, actions } = useDisplayChapterLogic(chapterData)

	return <Card onClick={actions.skipAnimation} sx={ChapterOuterBoxStyle}>
		<WriteGradually
			variant={"h6"}
			frequency={10}
			onWriteFinished={actions.handleWriteFinished}
			skipAnimation={state.animationSkipped}
		>
			{ chapterData.chapterDescription }
		</WriteGradually>
		<Box>
			<Typography variant={"subtitle1"} sx={{ marginTop: 5 }}>
				{ `Savings: ${formatThousands(Math.round(savings*1000))}CHF` }
			</Typography>
		</Box>
		<Box sx={ChapterButtonBoxStyle}>
			{ state.choicesDisplayed && chapterData.choices.map(choice => {
				const incomeSign = choice.score.economic < 0 ? "-" : "+"
				const incomeValue = Math.round(Math.abs(choice.score.economic) * 1000)
				const incomevalueStr = formatThousands(incomeValue)
				return <Button
					variant={"text"}
					onClick={() => onChoice(choice)}
					disabled={savings + choice.score.economic <= 0}
				>
					{`${choice.choiceDescription} (${incomeSign}${incomevalueStr} CHF)`}
				</Button>
			}) }
		</Box>
	</Card>;
}
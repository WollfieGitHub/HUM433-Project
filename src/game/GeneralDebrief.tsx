import {Button, Card, Typography} from "@mui/material";
import {GameOuterBoxStyle} from "./game.style";

interface GeneralDebriefProps {
	onComplete: () => void;
}

const DEBRIEF_TEXT = <>
	Congratulations on completing the journey through the intricate landscape of entrepreneurship ethics! Throughout this
	game, you encountered a multitude of moral dilemmas, each shaping the trajectory of your virtual business empire. From
	balancing profit with principle to confronting tough decisions amidst uncertainty, your journey underscored the
	complexities of ethical entrepreneurship.
	<br/>
	As you reflect on your virtual experience, remember that the choices made here mirror those you'll face in real-world
	entrepreneurship. The delicate balance between profit and principle, the moral ambiguity of tough decisions, and the
	importance of ethics, integrity, and empathy are timeless lessons. Carry these insights forward into your own
	entrepreneurial endeavors, striving to build businesses that not only thrive financially but also contribute
	positively to society and the world.
</>;

export default function GeneralDebrief(
	{onComplete}: GeneralDebriefProps,
) {

	return <Card sx={{...GameOuterBoxStyle, gap: 5, padding: 5, boxSizing: "border-box"}}>
		<Typography textAlign={"left"}>
			{DEBRIEF_TEXT}
		</Typography>
		<Button variant={"outlined"} onClick={onComplete}>
			Back to chapter choice
		</Button>
	</Card>;
}
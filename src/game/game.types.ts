export interface GameScore {
	environment: number;
	social: number;
	economic: number;
}

export interface GameChoice {
	choiceDescription: string;
	score: GameScore;
}

export interface GameChapterData {
	chapterId: number;
	chapterDescription: string;
	choices: GameChoice[]
}
export type GameData = GameChapterData[]

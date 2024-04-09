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
	chapterId: string;
	chapterDescription: string;
	choices: GameChoice[]
}
export interface GameData {
	startupName: string;
	startupDescription: string;
	chapters: GameChapterData[];
}

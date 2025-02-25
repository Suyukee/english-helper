export enum WordLevel {
	A1 = 'A1',
	A2 = 'A2',
	B1 = 'B1',
	B2 = 'B2',
	C1 = 'C1',
	C2 = 'C2',
}

export interface Word {
	id: string;
	eng: string;
	rus: string;
	level: WordLevel;
}

export interface WordLevelProgress {
	lvl: WordLevel;
	learned: number;
	total: number;
}

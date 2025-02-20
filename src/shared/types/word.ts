export type WordLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Word {
	id: number;
	eng: string;
	rus: string;
	level: WordLevel;
}
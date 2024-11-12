export interface WordDto {
	id: string;
	eng: string;
	rus: string;
	isGuess: boolean;
}

export type WordLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface WordDto {
	eng: string;
	rus: string;
}

export interface AnswerOptionsDto extends WordDto {
	isRight: boolean;
}

export type WordLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

'use server';

type WordLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

const words = {
	A1: [
		{ eng: 'the', rus: 'этот' },
		{ eng: 'be', rus: 'быть / являться / находиться' },
		{ eng: 'to', rus: 'в направлении / чтобы' },
		{ eng: 'and', rus: 'и / а' },
		{ eng: 'a', rus: 'некий / один' },
		{ eng: 'of', rus: 'из / от / о' },
		{ eng: 'have', rus: 'иметь / обладать' },
	],

	A2: [],

	B1: [],

	B2: [],

	C1: [],

	C2: [],
};

export async function GetWords(level: WordLevel) {
	const word = words[level][Math.floor(Math.random() * words[level].length)];
	return word;
}

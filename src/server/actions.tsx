'use server';

const words = [
	{ eng: 'the', rus: 'этот' },
	{ eng: 'be', rus: 'быть / являться / находиться' },
	{ eng: 'to', rus: 'в направлении / чтобы' },
	{ eng: 'and', rus: 'и / а' },
	{ eng: 'a', rus: 'некий / один' },
	{ eng: 'of', rus: 'из / от / о' },
	{ eng: 'have', rus: 'иметь / обладать' },
];

export default async function GetWords(number = 1) {
	const word = Array.from(
		{ length: number },
		() => words[Math.floor(Math.random() * words.length)],
	);
	console.log(word);
	return word;
}

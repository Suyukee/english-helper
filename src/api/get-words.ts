import { connection } from 'next/server';
import { words } from '@/api/words';
import { WordDto, WordLevel } from '@/types/word';

export async function getAnwerOptions(level: WordLevel) {
	await connection();
	const randomElement = Math.floor(Math.random() * words[level].length);

	const rightWord: WordDto = { ...words[level][randomElement] };
	const answerOptions: WordDto[] = [rightWord];

	while (answerOptions.length < 5) {
		const randomElement = Math.floor(Math.random() * words[level].length);

		await connection();
		const word = { ...words[level][randomElement] };

		if (!answerOptions.find((el) => el.eng === word.eng) && !word.isGuess) {
			answerOptions.push(word);
		}
	}

	answerOptions.sort(() => Math.random() - 0.5);

	return { answerOptions, rightWordId: rightWord.id };
}

export function clearIsGuess() {
	const [allWordsArr] = Object.values(words);
	allWordsArr.forEach((word) => (word.isGuess = false));
}

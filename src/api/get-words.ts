import { words } from '@/api/words';
import { AnswerOptionsDto, WordLevel } from '@/types/word';
import { connection } from 'next/server';

export async function getAnwerOptions(level: WordLevel) {
	const randomElement = Math.floor(Math.random() * words[level].length);

	await connection();
	const rightWord: AnswerOptionsDto = { ...words[level][randomElement], isRight: true };
	const answerOptions: AnswerOptionsDto[] = [rightWord];

	while (answerOptions.length < 5) {
		const randomElement = Math.floor(Math.random() * words[level].length);

		await connection();
		const word = { ...words[level][randomElement], isRight: false };

		if (!answerOptions.find((el) => el.eng === word.eng)) {
			answerOptions.push(word);
		}
	}

	answerOptions.sort(() => Math.random() - 0.5);

	return answerOptions;
}

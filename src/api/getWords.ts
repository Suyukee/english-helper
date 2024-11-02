import { words } from '@/api/words';
import { Word, WordLevel } from '@/types/word';
import { connection } from 'next/server';

export async function getRightWord(level: WordLevel) {
	await connection();
	const word = words[level][Math.floor(Math.random() * words[level].length)];
	return word;
}

export async function getFakeWords(level: WordLevel, rightWord: Word) {
	const fakeWords = [rightWord];

	while (fakeWords.length < 5) {
		const word = words[level][Math.floor(Math.random() * words[level].length)];
		if (!fakeWords.includes(word)) {
			fakeWords.push(word);
		}
	}

	fakeWords.sort(() => Math.random() - 0.5);

	return fakeWords;
}

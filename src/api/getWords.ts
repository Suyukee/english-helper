import { words } from '@/api/words';
import { Word, WordLevel } from '@/types/word';

export function getRightWord(level: WordLevel) {
	const word = words[level][Math.floor(Math.random() * words[level].length)];
	return word;
}

export function getFakeWords(level: WordLevel, rightWord: Word) {
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

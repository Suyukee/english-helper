import { Word } from '@/shared/types/word';

interface WordQuizProps {
	words: Word[] | null;
}

export default function WordQuiz({ words }: WordQuizProps) {
	return (
		<div>
			<h1>Word - ...</h1>
			<p>Выберете правильный вариант</p>

			<pre>{JSON.stringify(words, null, 2)}</pre>
		</div>
	);
}

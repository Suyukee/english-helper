'use client';

import { useRouter } from 'next/navigation';
import { Word } from '@/shared/types/word';
import styles from '@/shared/styles/word-quiz.module.css';

interface WordQuizProps {
	words: Word[] | null;
}

export default function WordQuiz({ words }: WordQuizProps) {
	const router = useRouter();

	const handleClick = (index: number) => {
		if (index === 0) {
			console.log('true');
		} else {
			console.log('false');
		}

		router.refresh();
	};

	if (!words) return;

	return (
		<div>
			<h1>{words[0].eng} - ...</h1>
			<p>Выберете правильный вариант</p>

			<nav className={styles.nav}>
				{words.map((item, index) => (
					<button className={styles.button} key={index} onClick={() => handleClick(index)}>
						{item.rus}
					</button>
				))}
			</nav>
		</div>
	);
}

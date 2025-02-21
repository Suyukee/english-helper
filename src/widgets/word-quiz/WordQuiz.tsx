'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/shared/lib/client';
import { Word } from '@/shared/types/word';
import styles from '@/shared/styles/word-quiz.module.css';

interface WordQuizProps {
	words: Word[] | null;
}

export default function WordQuiz({ words }: WordQuizProps) {
	const router = useRouter();

	const handleClick = async (id: string) => {
		if (rightWord.id === id) {
			const supabase = createClient();
			await supabase.from('words').update({ is_learned: true }).match({ id });
		}

		router.refresh();
	};

	if (!words) return;

	const rightWord = words[0];

	return (
		<div className={styles.main}>
			<h1>{words[0].eng} — ...</h1>
			<p>Выберите правильный вариант</p>

			<nav className={styles.nav}>
				{words
					.sort(() => Math.random() - 0.5)
					.map((word) => (
						<button
							className={`${styles.button}`}
							key={word.id}
							onClick={() => handleClick(word.id)}
						>
							{word.rus}
						</button>
					))}
			</nav>
		</div>
	);
}

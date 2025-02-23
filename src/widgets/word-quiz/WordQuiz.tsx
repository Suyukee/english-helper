'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/shared/lib/client';
import { Word } from '@/shared/types/word';
import styles from '@/shared/styles/word-quiz.module.css';

interface WordQuizProps {
	words: Word[] | null;
}

export default function WordQuiz({ words }: WordQuizProps) {
	const buttonRef = useRef<(HTMLButtonElement | null)[]>([]);

	const router = useRouter();

	if (!words) return;

	const rightWord = words[0];

	const handleClick = async (id: string, index: number) => {
		if (rightWord.id === id) {
			buttonRef.current[index]?.classList.add(styles.right);
		} else {
			buttonRef.current[index]?.classList.add(styles.wrong);
		}

		if (rightWord.id === id) {
			const supabase = createClient();
			await supabase.from('words').update({ is_learned: true }).match({ id });
		}

		router.refresh();
	};

	return (
		<div className={styles.main}>
			<h1>{words[0].eng} — ...</h1>
			<p>Выберите правильный вариант</p>

			<nav className={styles.nav}>
				{words
					.sort(() => Math.random() - 0.5)
					.map((word, index) => (
						<button
							className={`${styles.button}`}
							key={word.id}
							ref={(el) => {
								buttonRef.current[index] = el;
							}}
							onClick={() => handleClick(word.id, index)}
						>
							{word.rus}
						</button>
					))}
			</nav>
		</div>
	);
}

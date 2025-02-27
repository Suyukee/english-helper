'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/shared/lib/client';
import { Word } from '@/shared/types/word';
import styles from '@/shared/styles/word-quiz.module.css';
import ContentHeader from '@/shared/components/content-header/ContentHeader';

interface WordQuizProps {
	words: Word[] | null;
	rightWord: Word;
}

export default function WordQuiz({ words, rightWord }: WordQuizProps) {
	const router = useRouter();
	const buttonRef = useRef<(HTMLButtonElement | null)[]>([]);
	const supabase = createClient();

	useEffect(() => {
		buttonRef.current.map((item) => item?.classList.remove(styles.wrong));
	}, [words, rightWord]);

	const handleClick = async (id: string, index: number) => {
		if (id === rightWord.id) {
			buttonRef.current[index]?.classList.add(styles.right);

			await supabase.from('words').update({ is_learned: true }).match({ id });
		} else {
			buttonRef.current[index]?.classList.add(styles.wrong);
		}

		router.refresh();
	};

	if (!words) return;

	return (
		<div className={styles.main}>
			<ContentHeader title={`${rightWord.eng} — ...`} subtitle="Выберите правильный вариант" />

			<nav className={styles.nav}>
				{words.map((word, index) => (
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

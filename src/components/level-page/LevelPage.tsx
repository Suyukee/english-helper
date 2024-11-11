'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnswerOptions from '@/components/answer-options';
import { AnswerOptionsDto } from '@/types/word';
import styles from '@/styles/main-page.module.css';

export default function LevelPage({ answerOptions }: { answerOptions: AnswerOptionsDto[] }) {
	const [countRight, setCountRight] = useState(0);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>{answerOptions.find((word) => word.isRight == true)?.eng} — …</h1>
					<p>переводится как</p>
				</div>
				<AnswerOptions answerOptions={answerOptions} setCountRight={setCountRight} />
				<div className={styles.resultText}>
					<p>Правильных: {countRight}</p>
				</div>
			</main>
			<nav className={styles.nav}>
				<Link href="/">Назад</Link>
			</nav>
		</div>
	);
}

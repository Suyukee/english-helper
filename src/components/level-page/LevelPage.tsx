'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnswerOptions from '@/components/answer-options';
import { words } from '@/api/words';
import { WordDto, WordLevel } from '@/types/word';
import styles from '@/styles/main-page.module.css';

interface Props {
	level: WordLevel;
	answerOptions: WordDto[];
	rightWordId: string;
}

export default function LevelPage({ level, answerOptions, rightWordId }: Props) {
	const router = useRouter();

	const [countRight, setCountRight] = useState(0);

	useEffect(() => {
		if (countRight > words[level].length - 5) {
			router.push('/');
		}
	}, [countRight, level, router]);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>{answerOptions.find((word) => word.id === rightWordId)?.eng} — …</h1>
					<p>переводится как</p>
				</div>
				<AnswerOptions
					answerOptions={answerOptions}
					rightWordId={rightWordId}
					setCountRight={setCountRight}
				/>
				<div className={styles.resultText}>
					<p>{`${countRight} / ${words[level].length}`}</p>
				</div>
			</main>
			<nav className={styles.nav}>
				<Link href="/">Назад</Link>
			</nav>
		</div>
	);
}

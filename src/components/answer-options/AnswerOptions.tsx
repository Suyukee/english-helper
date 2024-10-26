'use client';

import styles from '@/styles/page.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Word {
	eng: string;
	rus: string;
}

interface Props {
	rightWord: Word;
	answerOptions: Word[];
}

export default function AnswerOptions({ rightWord, answerOptions }: Props) {
	const router = useRouter();

	const [selectedWord, setSelectedWord] = useState<number | null>(null);

	const handleShowNext = () => {
		setSelectedWord(null);
		router.refresh();
	};

	return (
		<div className={styles.main}>
			<ul className={styles.listBox}>
				{answerOptions.map((word, i) => (
					<li key={i} className={styles.listItem}>
						<button
							className={
								i === selectedWord ? (word.eng === rightWord.eng ? styles.right : styles.wrong) : ''
							}
							onClick={() => setSelectedWord(i)}
						>
							{word.rus}
						</button>
					</li>
				))}
			</ul>

			<button className={styles.next} onClick={handleShowNext}>
				Дальше
			</button>
		</div>
	);
}

'use client';

import { useState } from 'react';
import { Word } from '@/types/word';
import styles from '@/styles/page.module.css';

interface Props {
	rightWord: Word;
	answerOptions: Word[];
}

export default function AnswerOptions({ rightWord, answerOptions }: Props) {
	const [selectedWord, setSelectedWord] = useState<number | null>(null);

	const handleShowNext = () => {
		setSelectedWord(null);
		location.reload();
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

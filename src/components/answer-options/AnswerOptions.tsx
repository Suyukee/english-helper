'use client';

import { useMemo, useState } from 'react';
import { Word } from '@/types/word';
import styles from '@/styles/page.module.css';
import { useRouter } from 'next/navigation';

interface Props {
	rightWord: Word;
	answerOptions: Word[];
}

export default function AnswerOptions({ rightWord, answerOptions }: Props) {
	const router = useRouter();

	const [selectedWord, setSelectedWord] = useState([false, false, false, false]);

	const rightIndex = useMemo(() => {
		return answerOptions.findIndex((word) => word === rightWord);
	}, [rightWord, answerOptions]);

	const [countWrong, setCountWrong] = useState(0);

	const handleSelectWord = (i: number) => {
		if (!selectedWord[i]) {
			setSelectedWord((prevState) => {
				const newState = prevState.slice();
				newState[i] = true;
				return newState;
			});

			if (answerOptions[i] === rightWord) {
				handleShowNext();
			} else {
				setCountWrong(countWrong + 1);
			}
		}
	};

	const handleShowNext = () => {
		setTimeout(() => {
			setSelectedWord([false, false, false, false]);
			router.refresh();
		}, 300);
	};

	return (
		<div className={styles.main}>
			<ul className={styles.listBox}>
				{answerOptions.map((word, index) => (
					<li key={index} className={styles.listItem}>
						<button
							className={
								selectedWord[index] ? (index === rightIndex ? styles.right : styles.wrong) : ''
							}
							onClick={() => handleSelectWord(index)}
						>
							{word.rus}
						</button>
					</li>
				))}
			</ul>
			<div className={styles.resultText}>
				<p>Ошибок: {countWrong}</p>
			</div>
		</div>
	);
}

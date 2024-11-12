'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { WordDto } from '@/types/word';
import styles from '@/styles/level-page.module.css';

interface Words extends WordDto {
	isSelect: boolean;
}

interface Props {
	answerOptions: WordDto[];
	rightWordId: string;
	setCountRight: Dispatch<SetStateAction<number>>;
}

export default function AnswerOptions({ answerOptions, rightWordId, setCountRight }: Props) {
	const router = useRouter();

	const [words, setWords] = useState<Words[]>(
		answerOptions.map((word) => ({ ...word, isSelect: false })),
	);

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(false);
		setWords(answerOptions.map((word) => ({ ...word, isSelect: false })));
	}, [answerOptions]);

	const handleSelectWord = (i: number) => {
		setWords((prevState) => {
			const newState = prevState.slice();
			newState[i].isSelect = true;
			return newState;
		});

		const countSelected = words.reduce((result: number, word: Words) => {
			if (word.isSelect) {
				result++;
			}
			return result;
		}, 0);

		if (answerOptions[i].id === rightWordId) {
			handleShowNext();

			if (countSelected === 0) {
				answerOptions[i].isGuess = true;
				setCountRight((prevState) => prevState + 1);
			}
		}
	};

	const handleShowNext = () => {
		setIsLoading(true);
		setTimeout(() => {
			router.refresh();
		}, 300);
	};

	return (
		<ul className={styles.listBox}>
			{words.map((word, index) => (
				<li key={index} className={styles.listItem}>
					<button
						className={word.isSelect ? (word.id === rightWordId ? styles.right : styles.wrong) : ''}
						disabled={word.isSelect || isLoading}
						onClick={() => handleSelectWord(index)}
					>
						{word.rus}
					</button>
				</li>
			))}
		</ul>
	);
}

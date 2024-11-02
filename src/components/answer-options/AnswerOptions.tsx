'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnswerOptionsDto } from '@/types/word';
import styles from '@/styles/level-page.module.css';

interface Words extends AnswerOptionsDto {
	isSelect: boolean;
}

interface Props {
	answerOptions: AnswerOptionsDto[];
	setCountWrong: Dispatch<SetStateAction<number>>;
}

export default function AnswerOptions({ answerOptions, setCountWrong }: Props) {
	const router = useRouter();

	const [words, setWords] = useState<Words[]>(
		answerOptions.map((word) => ({ ...word, isSelect: false })),
	);

	useEffect(() => {
		setWords(answerOptions.map((word) => ({ ...word, isSelect: false })));
	}, [answerOptions]);

	const handleSelectWord = (i: number) => {
		setWords((prevState) => {
			const newState = prevState.slice();
			newState[i].isSelect = true;
			return newState;
		});

		if (answerOptions[i].isRight) {
			handleShowNext();
		} else {
			setCountWrong((prevState) => prevState + 1);
		}
	};

	const handleShowNext = () => {
		setTimeout(() => {
			router.refresh();
		}, 300);
	};

	return (
		<ul className={styles.listBox}>
			{words.map((word, index) => (
				<li key={index} className={styles.listItem}>
					<button
						className={word.isSelect ? (word.isRight ? styles.right : styles.wrong) : ''}
						disabled={word.isSelect}
						onClick={() => handleSelectWord(index)}
					>
						{word.rus}
					</button>
				</li>
			))}
		</ul>
	);
}

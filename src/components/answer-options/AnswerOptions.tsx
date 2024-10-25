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

	const [isSelect, setIsSelect] = useState<number | null>(null);

	const handleShowNext = () => {
		setIsSelect(null);
		router.refresh();
	};

	return (
		<div>
			<ol>
				{answerOptions.map((word, i) => (
					<li key={i} className={styles.ctas}>
						<button
							className={
								i === isSelect ? (word.eng === rightWord.eng ? styles.right : styles.wrong) : ''
							}
							onClick={() => setIsSelect(i)}
						>
							{word.rus}
						</button>
					</li>
				))}
			</ol>
			<button className={styles.ctas} onClick={handleShowNext}>
				Дальше
			</button>
		</div>
	);
}

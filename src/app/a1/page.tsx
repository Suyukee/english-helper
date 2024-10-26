import { connection } from 'next/server';
import { getFakeWords, getRightWord } from '@/api/getWords';
import AnswerOptions from '@/components/answer-options';
import styles from '@/styles/page.module.css';

export default async function BeginnerPage() {
	await connection();
	const rightWord = getRightWord('A1');
	const answerOptions = getFakeWords('A1', rightWord);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>{rightWord.eng} — …</h1>
					<p>переводится как</p>
				</div>
				<AnswerOptions rightWord={rightWord} answerOptions={answerOptions} />
			</main>
		</div>
	);
}

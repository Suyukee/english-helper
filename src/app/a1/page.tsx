import { GetRightWord } from '@/server/actions';
import AnswerOptions from '@/components/answer-options';
import styles from '@/styles/page.module.css';

export default async function BeginnerPage() {
	const rightWord = await GetRightWord('A1');
	const answerOptions = [
		rightWord,
		await GetRightWord('A1'),
		await GetRightWord('A1'),
		await GetRightWord('A1'),
	];
	answerOptions.sort(() => Math.random() - 0.5);

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

import { GetRightWord } from '@/utils/getWords';
import AnswerOptions from '@/components/answer-options';
import styles from '@/styles/page.module.css';

export default function BeginnerPage() {
	const rightWord = GetRightWord('A1');
	const answerOptions = [rightWord];

	while (answerOptions.length < 4) {
		const word = GetRightWord('A1');
		if (!answerOptions.includes(word)) {
			answerOptions.push(word);
		}
	}

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

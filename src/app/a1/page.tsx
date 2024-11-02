import Link from 'next/link';
// import { connection } from 'next/server';
import { getFakeWords, getRightWord } from '@/api/getWords';
import AnswerOptions from '@/components/answer-options';
import styles from '@/styles/page.module.css';

export default async function BeginnerPage() {
	// await connection();
	const rightWord = await getRightWord('A1');
	const answerOptions = await getFakeWords('A1', rightWord);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>{rightWord.eng} — …</h1>
					<p>переводится как</p>
				</div>
				<AnswerOptions rightWord={rightWord} answerOptions={answerOptions} />
			</main>
			<nav className={styles.nav}>
				<Link href="/">Назад</Link>
			</nav>
		</div>
	);
}

import Link from 'next/link';
import { connection } from 'next/server';
import { getFakeWords, getRightWord } from '@/api/getWords';
import AnswerOptions from '@/components/answer-options';
import styles from '@/styles/page.module.css';

export default async function ElementaryPage() {
	await connection();
	const rightWord = getRightWord('A2');
	const answerOptions = getFakeWords('A2', rightWord);

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

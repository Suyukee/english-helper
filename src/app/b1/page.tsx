import Link from 'next/link';
import { getAnwerOptions } from '@/api/get-words';
import AnswerOptions from '@/components/answer-options';
import styles from '@/styles/main-page.module.css';

export default async function BeginnerPage() {
	const answerOptions = await getAnwerOptions('B1');

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>{answerOptions.find((word) => word.isRight == true)?.eng} — …</h1>
					<p>переводится как</p>
				</div>
				<AnswerOptions answerOptions={answerOptions} />
			</main>
			<nav className={styles.nav}>
				<Link href="/">Назад</Link>
			</nav>
		</div>
	);
}

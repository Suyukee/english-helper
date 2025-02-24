import Link from 'next/link';
import WordQuiz from '@/widgets/word-quiz';
import { getWords } from '@/widgets/word-quiz/actions';
import { levelProgress } from '@/widgets/level-list/actions';
import styles from '@/shared/styles/page.module.css';

interface LevelPageProps {
	params: Promise<{ level: string }>;
}

export default async function LevelPage({ params }: LevelPageProps) {
	const { level } = await params;

	const { words, rightWord } = await getWords(level);
	const progress = await levelProgress(level);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				{words.length > 0 ? (
					<WordQuiz words={words} rightWord={rightWord} />
				) : (
					<div>
						<h1>Все слова изучены 🎉</h1>
						<p>Выберите другой уровень или сбросьте прогресс</p>
					</div>
				)}

				<div className={styles.resultText}>
					<p>{progress}</p>
				</div>
			</main>

			<nav className={styles.nav}>
				<Link href="/" className={styles.link}>
					Назад
				</Link>
			</nav>
		</div>
	);
}

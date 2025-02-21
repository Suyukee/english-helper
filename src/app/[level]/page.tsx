import { getWords } from '@/widgets/word-quiz/actions';
import WordQuiz from '@/widgets/word-quiz';
import styles from '@/shared/styles/page.module.css';

interface LevelPageProps {
	params: Promise<{ level: string }>;
}

export default async function LevelPage({ params }: LevelPageProps) {
	const { level } = await params;
	console.log(level);
	const words = await getWords(level);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<WordQuiz words={words} />
			</main>
		</div>
	);
}

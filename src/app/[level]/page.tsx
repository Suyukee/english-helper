import { getWords } from '@/widgets/word-quiz/actions';
import { getLevelProgress } from '@/widgets/level-list/actions';
import WordQuiz from '@/widgets/word-quiz';
import ContentHeader from '@/shared/components/content-header/ContentHeader';
import GoBack from '@/widgets/go-back';
import styles from '@/shared/styles/page.module.css';

interface LevelPageProps {
	params: Promise<{ level: string }>;
}

export default async function LevelPage({ params }: LevelPageProps) {
	const { level } = await params;

	const { words, rightWord } = await getWords(level);
	const progress = await getLevelProgress(level);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				{words.length > 0 ? (
					<>
						<WordQuiz words={words} rightWord={rightWord} />
						<div className={styles.resultText}>
							<p>
								{progress.learned} / {progress.total}
							</p>
						</div>
					</>
				) : (
					<ContentHeader
						variant="gap"
						title="🎉 Ура, все слова изучены!"
						subtitle="Выберите другой уровень или сбросьте прогресс"
					/>
				)}
			</main>

			<GoBack />
		</div>
	);
}

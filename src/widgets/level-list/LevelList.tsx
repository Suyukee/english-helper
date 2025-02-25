import Link from 'next/link';
import { getAllProgress } from './actions';
import { WordLevel, WordLevelProgress } from '@/shared/types/word';
import styles from '@/shared/styles/level-list.module.css';

interface LevelListProps {
	userId: string;
}

export default async function LevelList({ userId }: LevelListProps) {
	const progress = await getAllProgress();

	const getLevelProgress = (level: WordLevel) => {
		const { learned, total } = progress.find((item: WordLevelProgress) => item.lvl === level);
		return `${learned}/${total}`;
	};

	const levels = [
		{ level: WordLevel.A1, name: 'Begginer' },
		{ level: WordLevel.A2, name: 'Elementary' },
		{ level: WordLevel.B1, name: 'Intermediate' },
		{ level: WordLevel.B2, name: 'Upper Intermediate' },
		{ level: WordLevel.C1, name: 'Advanced' },
		{ level: WordLevel.C2, name: 'Proficiency' },
	];

	if (!userId) return;

	return (
		<nav className={styles.nav}>
			{levels.map((item) => (
				<Link className={styles.link} href={`/${item.level}`} key={item.level}>
					{item.level} - {item.name}: {getLevelProgress(item.level)}
				</Link>
			))}
		</nav>
	);
}

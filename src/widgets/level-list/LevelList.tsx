import Link from 'next/link';
import { getAllProgress } from './actions';
import { WordLevel } from '@/shared/types/word';
import styles from '@/shared/styles/level-list.module.css';

interface LevelListProps {
	userId: string;
}

interface WordLevelProgress {
	lvl: WordLevel;
	learned: number;
	total: number;
}

export default async function LevelList({ userId }: LevelListProps) {
	const progress = await getAllProgress();

	const getLevelProgress = (level: WordLevel) => {
		const { learned, total } = progress.find((item: WordLevelProgress) => item.lvl === level);
		return `${learned}/${total}`;
	};

	const levels = [
		{ title: `A1 — Beginner (${getLevelProgress('A1')} слов)`, url: '/A1' },
		{ title: `A2 — Elementary (${getLevelProgress('A2')})`, url: '/A2' },
		{ title: `B1 — Intermediate (${getLevelProgress('B1')} слов)`, url: '/B1' },
		{ title: `B2 — Upper Intermediate (${getLevelProgress('B2')} слов)`, url: '/B2' },
		{ title: `C1 — Advanced (${getLevelProgress('C1')} слов)`, url: '/C1' },
		{ title: `C2 — Proficiency (${getLevelProgress('C2')} слов)`, url: '/C2' },
	];

	if (!userId) return;

	return (
		<nav className={styles.nav}>
			{levels.map((item) => (
				<Link className={styles.link} href={item.url} key={item.url}>
					{item.title}
				</Link>
			))}
		</nav>
	);
}

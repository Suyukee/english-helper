import Link from 'next/link';
import { levelProgress } from './actions';
import styles from '@/shared/styles/level-list.module.css';

interface LevelListProps {
	userId: string;
}

export default async function LevelList({ userId }: LevelListProps) {
	const progress = [
		await levelProgress('A1'),
		await levelProgress('A2'),
		await levelProgress('B1'),
		await levelProgress('B2'),
		await levelProgress('C1'),
		await levelProgress('C2'),
	];

	const levels = [
		{ title: `A1 — Beginner (${progress[0]} слов)`, url: '/A1' },
		{ title: `A2 — Elementary (${progress[1]} слов)`, url: '/A2' },
		{ title: `B1 — Intermediate (${progress[2]} слов)`, url: '/B1' },
		{ title: `B2 — Upper Intermediate (${progress[3]} слов)`, url: '/B2' },
		{ title: `C1 — Advanced (${progress[4]} слов)`, url: '/C1' },
		{ title: `C2 — Proficiency (${progress[5]} слов)`, url: '/C2' },
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

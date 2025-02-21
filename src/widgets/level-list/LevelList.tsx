import Link from 'next/link';
import { levelProgress } from './actions';
import styles from '@/shared/styles/level-list.module.css';

interface LevelListProps {
	userId: string;
}

export default async function LevelList({ userId }: LevelListProps) {
	const a1Progress = await levelProgress('A1');
	const a2Progress = await levelProgress('A2');

	const levels = [
		{ title: `A1 — Beginner (${a1Progress} слов)`, url: '/A1' },
		{ title: `A2 — Elementary (${a2Progress} слов)`, url: '/A2' },
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

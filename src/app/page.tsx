import { words } from '@/api/words';
import styles from '@/styles/page.module.css';
import Link from 'next/link';

const englishLevel = [
	{ title: `A1 — Beginner (+${words.A1.length} слов)`, href: '/a1' },
	{ title: `A2 — Elementary (+${words.A2.length} слов)`, href: '/a2' },
	{ title: `B1 — Intermediate (+${words.B1.length} слов)`, href: '/b1' },
	{ title: `B2 — Upper Intermediate (+${words.B2.length} слов)`, href: '/b2' },
	{ title: `C1 — Advanced (+${words.C1.length} слов)`, href: '/c1' },
	{ title: `C2 — Proficiency (+${words.C2.length} слов)`, href: '/c2' },
];

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>English helper</h1>
					<p>Выберете ваш уровень</p>
				</div>
				<ul className={styles.listBox}>
					{englishLevel.map((lvl, i) => (
						<li key={i} className={styles.listItem}>
							<Link href={lvl.href} className={styles.secondary}>
								{lvl.title}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

import styles from '@/styles/page.module.css';
import Link from 'next/link';

const englishLevel = [
	{ title: 'A1 — Beginner (+650 слов)', href: '/A1' },
	{ title: 'A2 — Elementary (+1029 слов)', href: '/A2' },
	{ title: 'B1 — Intermediate (+1610 слов)', href: '/B1' },
	{ title: 'B2 — Upper Intermediate (+2056 слов)', href: '/B2' },
	{ title: 'C1 — Advanced (+1490 слов)', href: '/C1' },
	{ title: 'C2 — Proficiency (+1133 слов)', href: '/C2' },
];

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>English helper</h1>
					<p>Выберете ваш уровень</p>
				</div>
				<ol>
					{englishLevel.map((lvl, i) => (
						<li key={i} className={styles.ctas}>
							<Link href={lvl.href} className={styles.secondary}>
								{lvl.title}
							</Link>
						</li>
					))}
				</ol>
			</main>
		</div>
	);
}

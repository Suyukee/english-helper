import styles from '@/styles/page.module.css';
import Link from 'next/link';

const englishLevel = [
	{ title: 'A1 — Beginner (650 слов)', href: '/a1' },
	{ title: 'A2 — Elementary (1029 слов)', href: '/a2' },
	{ title: 'B1 — Intermediate (1029 слов)', href: '/b1' },
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

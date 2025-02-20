import Link from 'next/link';
import styles from '@/shared/styles/page.module.css';

export default function ErrorPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1>Error</h1>
			</main>
			<div>
				<Link href="/">На главную</Link>
			</div>
		</div>
	);
}

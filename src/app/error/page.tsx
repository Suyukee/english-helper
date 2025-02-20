import Link from 'next/link';
import styles from '@/shared/styles/page.module.css';

export default function ErrorPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>Упс, ошибка :(</h1>
					<p>Что-то пошло не так</p>
				</div>
			</main>
			<div>
				<Link href="/">На главную</Link>
			</div>
		</div>
	);
}

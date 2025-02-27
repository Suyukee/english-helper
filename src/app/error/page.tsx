import Link from 'next/link';
import ContentHeader from '@/shared/components/content-header/ContentHeader';
import styles from '@/shared/styles/page.module.css';

export default function ErrorPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<ContentHeader title="Упс, ошибка :(" subtitle="Что-то пошло не так" />
			</main>
			<div>
				<Link href="/">На главную</Link>
			</div>
		</div>
	);
}

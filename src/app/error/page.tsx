import ContentHeader from '@/shared/components/content-header/ContentHeader';
import GoBack from '@/widgets/go-back';
import styles from '@/shared/styles/page.module.css';

export default function ErrorPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<ContentHeader title="Упс, ошибка :(" subtitle="Что-то пошло не так" />
			</main>

			<GoBack />
		</div>
	);
}

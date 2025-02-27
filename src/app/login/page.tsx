import ContentHeader from '@/shared/components/content-header/ContentHeader';
import LoginForm from '@/widgets/login-form';
import styles from '@/shared/styles/page.module.css';

export default function LoginPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<ContentHeader title="English helper" subtitle="Войдите или зарегистрируйтесь" />

				<LoginForm />
			</main>
		</div>
	);
}

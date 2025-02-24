import LoginForm from '@/widgets/login-form';
import styles from '@/shared/styles/page.module.css';

export default function LoginPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>English helper</h1>
					<p>Войдите или зарегистрируйтесь</p>
				</div>
				<LoginForm />
			</main>
		</div>
	);
}

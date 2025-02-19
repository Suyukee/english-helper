import LoginForm from '@/widgets/login-form';
import styles from '@/shared/styles/page.module.css';

export default function App() {
	return (
		<main className={styles.page}>
			<LoginForm />
		</main>
	);
}

import { login, signup } from '@/widgets/login-form/actions';
import styles from '@/shared/styles/login-form.module.css';

export default function LoginForm() {
	return (
		<form className={styles.form}>
			<label className={styles.label} htmlFor="email">
				Email:
			</label>
			<input className={styles.input} name="email" type="email" id="email" required />

			<label className={styles.label} htmlFor="password">
				Password:
			</label>
			<input className={styles.input} name="password" type="password" id="password" required />

			<div className={styles.control}>
				<button formAction={login}>Log in</button>
				<button formAction={signup}>Sign up</button>
			</div>
		</form>
	);
}

import { login, signup } from '@/widgets/login-form/actions';
import styles from '@/shared/styles/login-form.module.css';

export default function LoginForm() {
	return (
		<form className={styles.form}>
			<div className={styles.field}>
				<label className={styles.label} htmlFor="email">
					Email
				</label>
				<input
					className={styles.input}
					name="email"
					type="email"
					id="email"
					placeholder="m@example.com"
					required
				/>
			</div>

			<div className={styles.field}>
				<label className={styles.label} htmlFor="password">
					Пароль
				</label>
				<input className={styles.input} name="password" type="password" id="password" required />
			</div>

			<div className={styles.control}>
				<button className={styles.button} formAction={login}>
					Вход
				</button>
				<button className={styles.button} formAction={signup}>
					Регистрация
				</button>
			</div>
		</form>
	);
}

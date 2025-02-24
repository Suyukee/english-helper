import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';
import LevelList from '@/widgets/level-list';
import ResetProgress from '@/widgets/reset-progress';
import styles from '@/shared/styles/page.module.css';

export default async function App() {
	const supabase = await createClient();

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (!user) {
		redirect('/login');
	}

	if (error) {
		redirect('/error');
	}

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>English helper</h1>
					<p>Выберите ваш уровень</p>
				</div>
				<LevelList userId={user.id} />
			</main>
			<ResetProgress />
		</div>
	);
}

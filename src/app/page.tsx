import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';
import ContentHeader from '@/shared/components/content-header/ContentHeader';
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
				<ContentHeader title="English helper" subtitle="Выберите ваш уровень" />

				<LevelList />
			</main>

			<div>
				<ResetProgress />
			</div>
		</div>
	);
}

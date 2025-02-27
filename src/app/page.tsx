import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';
import UserIcon from '@/shared/icons/UserIcon';
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
			<header className={styles.header}>
				<UserIcon />
				{user.email}
			</header>

			<main className={styles.main}>
				<ContentHeader title="English helper" subtitle="Выберите ваш уровень" />

				<LevelList />
			</main>

			<ResetProgress />
		</div>
	);
}

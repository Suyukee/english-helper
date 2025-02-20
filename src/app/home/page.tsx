import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';
import LevelList from '@/widgets/level-list';
import styles from '@/shared/styles/page.module.css';

export default async function HomePage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect('/error');
	}

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>English helper</h1>
					<p>Выберете ваш уровень</p>
				</div>
				<LevelList userId={user.id} />
			</main>
		</div>
	);
}

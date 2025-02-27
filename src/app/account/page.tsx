import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';
import GoBack from '@/widgets/go-back';
import styles from '@/shared/styles/page.module.css';

export default async function AccountPage() {
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
				<h2>{user.email}</h2>
				<div>Общий прогресс: (в разработке)</div>
				<div>Выйти из аккаунта (в разработке)</div>
			</main>
			<GoBack />
		</div>
	);
}

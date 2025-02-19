import { createClient } from '@/shared/lib/server';
import styles from '@/shared/styles/page.module.css';

export default async function HomePage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data, error } = await supabase.from('words').select();

	if (error) return <div>Error</div>;

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>English helper</h1>
					<p>{user?.id}</p>
				</div>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</main>
		</div>
	);
}

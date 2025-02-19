import { createClient } from '@/shared/lib/server';

export default async function HomePage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data, error } = await supabase.from('words').select();

	if (error) return <div>Error</div>;

	return (
		<main>
			<h3>User ID - {user?.id}</h3>
			<br />
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</main>
	);
}

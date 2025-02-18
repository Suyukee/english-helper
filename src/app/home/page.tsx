import { createClient } from '@/shared/lib/server';

export default async function HomePage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data, error } = await supabase.from('a1').select();

	if (error) return <div>Error</div>;

	return (
		<div>
			<center>
				<h3>User ID - {user?.id}</h3>
				<br />
				<pre>{JSON.stringify(data)}</pre>
			</center>
		</div>
	);
}

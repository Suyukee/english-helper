import { createClient } from '@/utils/supabase/server';

export default async function HomePage() {
	const supabase = await createClient();
	const { data: words, error } = await supabase.from('a1').select();

	if (error) return <div>Error</div>;

	return (
		<div>
			<h1>{(words || []).length}</h1>
			<pre>{JSON.stringify(words, null, 2)}</pre>
		</div>
	);
}

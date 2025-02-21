import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

export async function getWords(level: string) {
	const supabase = await createClient();

	const { data, error } = await supabase
		.from('words')
		.select()
		.eq('level', level)
		.eq('is_learned', false);

	if (error) {
		redirect('/error');
	}

	return data;
}

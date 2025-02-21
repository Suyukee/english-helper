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

	return data.sort(() => Math.random() - 0.5).slice(0, 5);
}

export async function wordIsLearned(id: string) {
	const supabase = await createClient();

	const { error } = await supabase.from('words').update({ is_learned: true }).match({ id });

	if (error) {
		redirect('/error');
	}
}

'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

export async function levelProgress(level: string) {
	const supabase = await createClient();

	const { count: all } = await supabase
		.from('words')
		.select('*', { count: 'exact' })
		.eq('level', level);

	const { count: isLearned, error } = await supabase
		.from('words')
		.select('*', { count: 'exact' })
		.eq('level', level)
		.eq('is_learned', true);

	if (error || !all) {
		redirect('/error');
	}

	return `${isLearned} / ${all}`;
}

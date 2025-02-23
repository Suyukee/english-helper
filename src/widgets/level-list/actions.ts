'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

export async function levelProgress(level: string) {
	const supabase = await createClient();

	const { data: all } = await supabase.from('words').select().eq('level', level);

	const { data: learned } = await supabase
		.from('words')
		.select()
		.eq('level', level)
		.eq('is_learned', true);

	if (!all || !learned) {
		redirect('/error');
	}

	return `${learned.length} / ${all.length}`;
}

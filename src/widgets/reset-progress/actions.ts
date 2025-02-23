'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

export async function resetProgress() {
	const supabase = await createClient();

	const { error } = await supabase
		.from('words')
		.update({ is_learned: false })
		.eq('is_learned', true);

	if (error) {
		redirect('/error');
	}
}

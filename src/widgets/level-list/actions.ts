'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

export async function getLevelProgress(level: string) {
	const supabase = await createClient();

	const { data: progress, error } = await supabase.rpc('get_level_progress', {
		words_level: level,
	});

	if (error) {
		redirect('/error');
	}

	return progress[0];
}

export async function getAllProgress() {
	const supabase = await createClient();

	const { data: progress, error } = await supabase.rpc('get_all_progress');

	if (error) {
		redirect('/error');
	}

	return progress;
}

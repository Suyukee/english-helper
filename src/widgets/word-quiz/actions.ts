'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

export async function getWords(level: string) {
	const supabase = await createClient();

	const { data: words, error } = await supabase.rpc('get_words', { words_level: level });

	if (error) {
		redirect('/error');
	}

	return {
		words: words,
		rightWord: words[Math.floor(Math.random() * 5)],
	};
}

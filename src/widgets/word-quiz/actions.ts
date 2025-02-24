'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

export async function getWords(level: string) {
	const supabase = await createClient();

	const { data: words, error } = await supabase.rpc('get_words', { words_level: level });

	if (error) {
		redirect('/error');
	}

	console.log(words[Math.floor(Math.random() * 5)].rus);

	return {
		words: words,
		rightWord: words[Math.floor(Math.random() * 5)],
	};
}

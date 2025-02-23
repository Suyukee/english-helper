'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';
import { Word } from '@/shared/types/word';

export async function login(formData: FormData) {
	const supabase = await createClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/home');
}

export async function signup(formData: FormData) {
	const supabase = await createClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signUp(data);

	if (error) {
		redirect('/error');
	}

	await createWords();

	revalidatePath('/', 'layout');
	redirect('/home');
}

async function createWords() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: A1 } = await supabase.from('A1').select<string, Word>().limit(2000);
	const { data: A2 } = await supabase.from('A2').select<string, Word>().limit(2000);
	const { data: B1 } = await supabase.from('B1').select<string, Word>().limit(2000);
	const { data: B2 } = await supabase.from('B2').select<string, Word>().limit(2000);
	const { data: C1 } = await supabase.from('C1').select<string, Word>().limit(2000);
	const { data: C2 } = await supabase.from('C2').select<string, Word>().limit(2000);

	if (!A1 || !A2 || !B1 || !B2 || !C1 || !C2) return;

	const temp = [...A1, ...A2, ...B1, ...B2, ...C1, ...C2];

	const words = temp.map((item: Word) => ({
		id: crypto.randomUUID(),
		user_id: user?.id,
		eng: item.eng,
		rus: item.rus,
		level: item.level,
	}));

	await supabase.from('words').insert(words);
}

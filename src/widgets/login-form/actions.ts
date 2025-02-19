'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/shared/lib/server';

type WordLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface Word {
	id: number;
	eng: string;
	rus: string;
	level: WordLevel;
}

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
	console.log('START');
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: a1 } = await supabase.from('a1').select<string, Word>();
	const { data: a2 } = await supabase.from('a2').select<string, Word>();

	if (!a1 || !a2) return;

	const temp = [...a1, ...a2];

	const words = temp.map((item: Word) => ({
		id: crypto.randomUUID(),
		user_id: user?.id,
		eng: item.eng,
		rus: item.rus,
		level: item.level,
	}));

	await supabase.from('words').insert(words);
}

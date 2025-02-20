import { levelProgress } from './actions';

interface LevelListProps {
	userId: string;
}

export default async function LevelList({ userId }: LevelListProps) {
	const a1Progress = await levelProgress('A1');
	const a2Progress = await levelProgress('A2');

	if (!userId) return;

	return (
		<ul>
			<li>A1 — Beginner ({a1Progress} слов)</li>
			<li>A2 — Elementary ({a2Progress} слов)</li>
		</ul>
	);
}

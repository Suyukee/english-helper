import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function ProficiencyPage() {
	const answerOptions = await getAnwerOptions('C2');

	return <LevelPage answerOptions={answerOptions} />;
}

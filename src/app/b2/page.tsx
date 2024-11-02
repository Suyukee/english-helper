import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function BeginnerPage() {
	const answerOptions = await getAnwerOptions('B2');

	return <LevelPage answerOptions={answerOptions} />;
}

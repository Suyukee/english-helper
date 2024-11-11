import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function AdvancedPage() {
	const answerOptions = await getAnwerOptions('C1');

	return <LevelPage answerOptions={answerOptions} />;
}

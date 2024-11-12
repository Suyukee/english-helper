import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function ElementaryPage() {
	const { answerOptions, rightWordId } = await getAnwerOptions('A2');

	return <LevelPage level="A2" answerOptions={answerOptions} rightWordId={rightWordId} />;
}

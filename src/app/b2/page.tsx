import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function BeginnerPage() {
	const { answerOptions, rightWordId } = await getAnwerOptions('B2');

	return <LevelPage level="B2" answerOptions={answerOptions} rightWordId={rightWordId} />;
}

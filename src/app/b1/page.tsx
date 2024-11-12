import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function BeginnerPage() {
	const { answerOptions, rightWordId } = await getAnwerOptions('B1');

	return <LevelPage level="B1" answerOptions={answerOptions} rightWordId={rightWordId} />;
}

import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function BeginnerPage() {
	const { answerOptions, rightWordId } = await getAnwerOptions('C1');

	return <LevelPage level="C1" answerOptions={answerOptions} rightWordId={rightWordId} />;
}

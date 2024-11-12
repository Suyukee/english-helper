import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function BeginnerPage() {
	const { answerOptions, rightWordId } = await getAnwerOptions('C2');

	return <LevelPage level="C2" answerOptions={answerOptions} rightWordId={rightWordId} />;
}

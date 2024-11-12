import { getAnwerOptions } from '@/api/get-words';
import LevelPage from '@/components/level-page';

export default async function BeginnerPage() {
	const { answerOptions, rightWordId } = await getAnwerOptions('A1');

	return <LevelPage level="A1" answerOptions={answerOptions} rightWordId={rightWordId} />;
}

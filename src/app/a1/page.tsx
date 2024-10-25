import GetWords from '@/server/actions';
import styles from '@/styles/page.module.css';

export default async function BeginnerPage() {
	const word = await GetWords(4);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					<h1>{word[0].eng} - ...</h1>
					<p>переводится как</p>
				</div>
				<ol>
					{word.map((w, i) => (
						<li key={i} className={styles.ctas}>
							<button className={styles.secondary}>{w.rus}</button>
						</li>
					))}
				</ol>
			</main>
		</div>
	);
}

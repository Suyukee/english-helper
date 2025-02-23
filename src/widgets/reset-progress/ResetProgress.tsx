'use client';

import { resetProgress } from './actions';
import ResetIcon from '@/shared/icons/ResetIcon';
import styles from '@/shared/styles/reset-progress.module.css';

export default function ResetProgress() {
	const handleReset = async () => {
		await resetProgress();
	};

	return (
		<nav className={styles.nav}>
			<button className={styles.resetBtn} onClick={handleReset}>
				<ResetIcon />
				Сбросить прогресс
			</button>
		</nav>
	);
}

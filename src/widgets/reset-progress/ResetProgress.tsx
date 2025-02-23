'use client';

import { useRouter } from 'next/navigation';
import { resetProgress } from './actions';
import ResetIcon from '@/shared/icons/ResetIcon';
import styles from '@/shared/styles/reset-progress.module.css';

export default function ResetProgress() {
	const router = useRouter();

	const handleReset = async () => {
		await resetProgress();

		router.refresh();
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

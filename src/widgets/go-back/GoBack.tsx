'use client';

import { useRouter } from 'next/navigation';
import styles from '@/shared/styles/navigation.module.css';

export default function GoBack() {
	const router = useRouter();

	const handleGoBack = () => {
		router.back();
	};

	return (
		<nav className={styles.nav}>
			<button className={styles.button} onClick={handleGoBack}>
				Назад
			</button>
		</nav>
	);
}

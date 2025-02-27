import { ReactNode } from 'react';
import styles from '@/shared/styles/content-header.module.css';

interface ContentHeaderProps {
	variant?: 'gap';
	title: string | ReactNode;
	subtitle: string | ReactNode;
}

export default function ContentHeader({ variant, title, subtitle }: ContentHeaderProps) {
	return (
		<div className={variant === 'gap' ? styles.gap : ''}>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	);
}

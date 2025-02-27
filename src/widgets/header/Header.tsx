import Link from 'next/link';
import UserIcon from '@/shared/icons/UserIcon';
import { User } from '@supabase/supabase-js';
import styles from '@/shared/styles/header.module.css';

interface HeaderProps {
	user: User;
}

export default function Header({ user }: HeaderProps) {
	return (
		<header className={styles.header}>
			<Link className={styles.user} href="/account">
				<UserIcon />
				{user.email}
			</Link>
		</header>
	);
}

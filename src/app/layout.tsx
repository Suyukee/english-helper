import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/shared/styles/globals.css';
import '@/shared/styles/theme.css';

const geistSans = localFont({
	src: '../../public/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: '../../public/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'English helper',
	description: 'Website to learn English words of varying difficulty',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
		</html>
	);
}

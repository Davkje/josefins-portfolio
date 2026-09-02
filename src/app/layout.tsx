import type { Metadata } from "next";
import localFont from "next/font/local";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const satoshi = localFont({
	src: [
		{
			path: "../fonts/Satoshi-Variable.woff2",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});

const funnelDisplay = Funnel_Display({
	subsets: ["latin"],
	variable: "--font-funnel-display",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: `${SITE_NAME} — Digital Designer & UX/UI Developer`,
	description: SITE_DESCRIPTION,
	openGraph: {
		title: `${SITE_NAME} — Digital Designer & UX/UI Developer`,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		siteName: SITE_NAME,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE_NAME} — Digital Designer & UX/UI Developer`,
		description: SITE_DESCRIPTION,
	},
	appleWebApp: {
		title: SITE_NAME,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${satoshi.variable} ${funnelDisplay.variable} h-full antialiased`}>
			<body className="min-h-full bg-[#fbfbfb] font-sans">{children}</body>
		</html>
	);
}

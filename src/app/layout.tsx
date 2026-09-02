import type { Metadata } from "next";
import localFont from "next/font/local";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

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
	title: "Josefin Moström — Digital Designer & UX/UI Developer",
	description:
		"Portfolio of Josefin Moström, digital designer and UX/UI developer based in Stockholm.",
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

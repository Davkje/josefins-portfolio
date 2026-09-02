import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
			<h1 className="font-display font-medium leading-none tracking-[-0.02em] text-[clamp(4rem,20vw,12rem)] text-black">
				404
			</h1>
			<Link href="/" className="text-lg font-medium underline hover:opacity-70 transition-opacity">
				Back home
			</Link>
		</main>
	);
}

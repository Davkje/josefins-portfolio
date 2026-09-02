"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Nav() {
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const header = headerRef.current;
		if (!header) return;

		const setHeaderHeight = () => {
			document.documentElement.style.setProperty(
				"--header-height",
				`${header.offsetHeight}px`,
			);
		};

		setHeaderHeight();
		const observer = new ResizeObserver(setHeaderHeight);
		observer.observe(header);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={headerRef}
			className="bg-white sticky top-0 z-50 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 sm:px-10 sm:py-5 lg:py-6"
		>
			<Link
				href="/"
				aria-label="Josefin Moström — home"
				className="hover:opacity-70 transition-opacity"
			>
				<Image
					src="/images/josefinlogo.svg"
					alt=""
					width={121}
					height={38}
					className="h-7 w-auto sm:h-8 lg:h-9.5"
				/>
			</Link>
			<nav className="flex items-center gap-4 text-sm font-medium text-black sm:gap-8 sm:text-lg lg:gap-14 lg:text-xl">
				<Link href="/#work" className="hover:opacity-60 transition-opacity">
					Projects
				</Link>
				<Link href="/about" className="hover:opacity-60 transition-opacity">
					About
				</Link>
				<a href="#contact" className="hover:opacity-60 transition-opacity">
					Contact
				</a>
				<a
					href="https://www.linkedin.com/in/josefin-mostr%C3%B6m-6673aa133/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-60 transition-opacity"
				>
					Linkedin
				</a>
			</nav>
		</header>
	);
}

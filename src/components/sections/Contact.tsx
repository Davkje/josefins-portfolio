import Image from "next/image";

export default function Contact() {
	return (
		<footer
			id="contact"
			className="bg-[#ceffe3] flex flex-col items-center justify-center gap-6 px-6 py-12 sm:gap-9 sm:py-16"
		>
			<h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-black">Let&apos;s connect!</h2>
			<div className="flex items-center gap-4 sm:gap-8">
				<a href="mailto:josefin.mostrom@gmail.com" aria-label="Email">
					<Image
						src="/images/icon-email.svg"
						alt=""
						width={69}
						height={69}
						className="size-10 hover:opacity-70 transition-opacity sm:size-14 lg:size-14 shrink-0"
					/>
				</a>
				<a href="tel:+46704284766" aria-label="Phone">
					<Image
						src="/images/icon-phone.svg"
						alt=""
						width={52}
						height={52}
						className="size-10 hover:opacity-70 transition-opacity sm:size-14 lg:size-14 shrink-0"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/josefin-mostr%C3%B6m-6673aa133/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<Image
						src="/images/icon-linkedin.svg"
						alt=""
						width={69}
						height={69}
						className="size-10 hover:opacity-70 transition-opacity sm:size-14 lg:size-14 shrink-0"
					/>
				</a>
			</div>
		</footer>
	);
}

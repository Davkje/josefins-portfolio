import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative flex md:min-h-[80vh] flex-col items-center justify-center gap-10 bg-[#6dffad] px-6 py-16 sm:px-10 lg:flex-row lg:gap-16 lg:px-25 lg:py-24 text-left"
		>
			<div className="flex flex-col place-self-start gap-4 lg:max-w-300">
				<p className="text-xl font-bold opacity-80 text-black sm:text-2xl lg:text-[32px]">
					Hi, I&apos;m Josefin. A...
				</p>
				<h1 className="font-display font-medium leading-none tracking-[-0.02em] text-[clamp(2.5rem,9vw,8rem)] opacity-80 text-black">
					Digital designer based in Stockholm.
				</h1>
			</div>
			<div className="group hidden lg:block absolute -bottom-25 lg:right-6 shrink-0 overflow-hidden rounded-full size-83">
				<Image
					src="/images/sticker1.webp"
					alt="Hand-drawn illustration of Josefin"
					fill
					priority
					className="object-cover transition-opacity duration-50 group-hover:opacity-0"
				/>
				<Image
					src="/images/sticker2.webp"
					alt=""
					fill
					className="object-cover inset-0 opacity-0 transition-opacity duration-50 group-hover:opacity-100"
				/>
			</div>
		</section>
	);
}

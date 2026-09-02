import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

interface WorkCardProps {
	slug: string;
	title: string;
	tags: string[];
	image: string;
}

function WorkCard({ slug, title, tags, image }: WorkCardProps) {
	return (
		<Link
			href={`/work/${slug}`}
			className="group relative flex aspect-4/5 flex-col justify-end gap-4 overflow-hidden px-4 py-6 sm:aspect-645/673 sm:gap-6 sm:px-6 sm:py-12"
		>
			<Image
				src={image}
				alt=""
				fill
				className="z-1 bg-gray-100 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
			/>
			<div className="flex flex-col h-full justify-between gap-4 z-2">
				<div className="flex flex-wrap gap-2 z-2 sm:gap-2.5">
					{tags.map((tag) => (
						<span
							key={tag}
							className="bg-white px-2 py-1.5 text-sm font-medium text-black sm:px-2.5 sm:py-2.5 sm:text-xl"
						>
							{tag}
						</span>
					))}
				</div>
				<h3 className="text-[clamp(1.5rem,5vw,3rem)] font-bold uppercase text-black bg-white w-min px-2">
					{title}
				</h3>
			</div>
		</Link>
	);
}

export default function Work() {
	return (
		<section id="work" className="bg-[#fbfbfb] px-6 py-12 sm:px-10 lg:px-14 lg:py-15">
			<h2 className="mb-6 text-[clamp(1.5rem,4vw,2rem)] font-bold text-black sm:mb-10">Projects</h2>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
				{projects.map((project) => (
					<WorkCard key={project.slug} {...project} />
				))}
			</div>
		</section>
	);
}

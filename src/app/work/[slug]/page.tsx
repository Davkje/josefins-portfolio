import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/ui/Nav";
import Contact from "@/components/sections/Contact";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		return {};
	}

	return {
		title: `${project.title} — Josefin Moström`,
		description: project.description[0],
		openGraph: {
			title: `${project.title} — Josefin Moström`,
			description: project.description[0],
			images: [project.image],
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.title} — Josefin Moström`,
			description: project.description[0],
			images: [project.image],
		},
	};
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		notFound();
	}

	return (
		<>
			<Nav />
			<main className="bg-[#fbfbfb] overflow-x-hidden">
				{/* ── Hero ── */}
				<section className="relative aspect-1440/746 w-full overflow-hidden bg-[#f1f1f1]">
					<Image src={project.heroImage} alt="" fill className="object-cover" priority />
				</section>

				{/* ── Heading, team & description ── */}
				<section className="grid grid-cols-1 gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-22 lg:py-20">
					<div className="flex flex-col gap-4">
						<h1 className="text-[clamp(2rem,5vw,2.5rem)] font-bold leading-[1.2]">
							{project.title}
						</h1>
						<p className="text-base font-medium leading-[1.4] text-[#8c8c8c] sm:text-lg">
							{project.category}
						</p>
						{project.team && (
							<p className="mt-4 text-base font-normal leading-[1.4]">
								<span className="font-medium">Team: </span>
								{project.team.join(", ")}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-6 text-base font-normal leading-normal sm:text-lg">
						{project.description.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
				</section>

				{/* ── Gallery ── */}
				{project.gallery.length > 0 && (
					<section className="flex flex-col gap-6 px-6 pb-16 sm:px-10 lg:gap-8 lg:px-22 lg:pb-24">
						{project.gallery.map((image, index) => (
							<div key={image.src} className="relative w-full overflow-hidden bg-[#f1f1f1]">
								<Image
									src={image.src}
									alt=""
									width={image.width}
									height={image.height}
									className="h-auto w-full"
									loading={index === 0 ? "eager" : "lazy"}
								/>
							</div>
						))}
					</section>
				)}

				<div className="px-6 pb-16 sm:px-10 lg:px-22 lg:pb-24">
					<Link href="/#work" className="w-fit text-lg font-medium underline">
						Back to projects
					</Link>
				</div>

				<Contact />
			</main>
		</>
	);
}

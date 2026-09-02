import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import Contact from "@/components/sections/Contact";
import ResumeAccordion from "@/components/ui/ResumeAccordion";
import SkillBadges from "@/components/ui/SkillBadges";
import TestimonialBubble from "@/components/ui/TestimonialBubble";

export const metadata: Metadata = {
	title: "About — Josefin Moström",
	description:
		"Learn more about Josefin Moström, digital designer and UX/UI developer based in Stockholm.",
};

const skills = [
	"UX/UI",
	"App design",
	"Figma",
	"Design systems",
	"After Effects",
	"Storytelling",
	"Branding",
	"Campaign strategy",
	"Photoshop",
	"Illustrator",
	"Layout",
	"Graphic design",
	"Research and analysis",
	"User testing",
	"Wireframes",
	"Mockup design",
	"Animation",
	"Prototyping",
];

const education = [
	{
		title: "Digital Designer Program",
		period: "Brobygrafiska, 2024-2026",
		description:
			"The program covers digital media design with a focus on problem-solving and strategic brand communication. Tools used include Figma, the Adobe Suite, and web development in HTML, CSS, and JavaScript.",
	},
	{
		title: "Media program",
		period: "NTI-gymnasiet, 2010-2013",
		description:
			"High school education concentrating on digital media production, graphic design, photography, video editing and visual communication.",
	},
];

const experience = [
	{
		title: "Digital designer",
		period: "Freelancing, 2026-present",
		description: "Digital and graphic design work for small businesses.",
	},
	{
		title: "Digital design intern",
		period: "VNTRS, 2026.01-2026.04",
		description:
			"Helped lay the foundation for a design system for one of their startups and supported another startup with the visual design of brand guidelines and sales presentations.",
	},
	{
		title: "Digital design intern",
		period: "Soleil AB, 2025.04-2025.06",
		description:
			"Created design proposals in Figma for clients, new design and layout for internal employee handbook, introduction course to the javascript framework Svelte.",
	},
	{
		title: "Accountant and Supply chain/logistics manager",
		period: "BE WTR AB, 2021-2024",
		description:
			"Accounting, financial administration, supply chain management, procurement, and logistics operations.",
	},
];

const moreExperience = [
	{
		title: "Accountant",
		period: "Nespresso, 2019-2021",
		description:
			"Accounting, financial administration, support other departments in organization with various finance tasks.",
	},
	{
		title: "Finance consultant",
		period: "Brightby, Consulting, 2018-2019",
		description:
			"Hired as a consultant to help a customer implement electronic invoicing in their vendor and client invoicing system.",
	},
	{
		title: "Finance assistant",
		period: "Klarna AB, 2015-2018",
		description:
			"Finance operations, financial administration, support other departments in organization with various finance related tasks.",
	},
	{
		title: "Merchant support",
		period: "Klarna AB, 2013-2015",
		description:
			"Assisted merchants with account management, technical support, payment processing inquiries, and issue resolution.",
	},
];

const testimonials = [
	{
		quote:
			"Josefin has demonstrated excellent collaboration skills. She worked effectively within the team, was attentive and receptive, and maintained a positive attitude towards both colleagues and supervisors. Her interpersonal skills are highly developed—she is curious, confident, and comfortable working with others. She asks thoughtful and relevant questions, challenges ideas when appropriate, and approaches problems and challenges with a solution-oriented mindset.",
		date: "2025-06-20",
		name: "Anders Rosén",
		title: "Project manager, Soleil AB",
	},
	{
		quote:
			"It's wonderful when you inherit a project from another designer and everything just works. This was my experience inheriting a project from Josefin. I helped implement her redesign of a client's app. She turned an inconsistent UI into a clean, simple, and beautiful system. What impressed me even more was hearing that Josefin did the work in far less time than I assumed, and that she did this as an intern. She's super talented!",
		date: "2026-04-11",
		name: "Anja Petrović",
		title: "Product designer for startups",
	},
	{
		quote:
			"Josefin is an ambitious, attentive, and driven designer who takes strong ownership of her work. During her internship at VNTRS, she primarily worked with UX/UI design, both with and without AI, while demonstrating a strong sense of color, form, and user experience.\n\nAmong her contributions, she helped lay the foundation for a design system for one of our startups and supported another startup with the visual design of brand guidelines and sales presentations. Josefin has a well-rounded skill set across UX/UI, visual design, and a solid understanding of the importance of research in product design.",
		date: "2026-06-03",
		name: "Mattias Kristensson",
		title: "Lead designer, VNTRS",
	},
];

export default function AboutPage() {
	return (
		<>
			<Nav />
			<main className="bg-[#fbfbfb] overflow-x-hidden">
				{/* ── Hero ── */}
				<section className="flex flex-col items-center gap-8 bg-[#6dffad] px-6 py-12 sm:px-10 lg:flex-row lg:items-start lg:gap-16 lg:px-22 lg:py-22">
					<div className="flex size-24 shrink-0 items-center justify-center bg-white sm:size-32 lg:h-28.75 lg:w-40.5">
						<p className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none">Hi!</p>
					</div>
					<div className="flex w-full flex-col gap-8 lg:max-w-181.25">
						<div className="text-base font-medium leading-[1.2] text-black space-y-6 sm:text-xl lg:text-2xl">
							<p>
								I&apos;m Josefin, a 31 year old digital designer based in Stockholm. In 2024 I
								decided to quit my finance job and start doing something that I actually enjoy, so I
								packed up my apartment, moved to a small town called Sunne, and started the Digital
								Design program at Brobygrafiska. Did I enjoy it?{" "}
								<span className="font-bold">YES</span>.
							</p>
							<p>
								Now I&apos;m graduated and hungry for new opportunities where I can combine
								creativity, strategy, and problem-solving to create meaningful digital experiences.
								I&apos;m passionate about designing solutions that are not only visually appealing
								but also intuitive, accessible, and enjoyable to use.
								<br />
								<br />
								Let&apos;s do something fun together!
							</p>
						</div>
						<a
							href="https://www.linkedin.com/in/josefin-mostr%C3%B6m-6673aa133/"
							target="_blank"
							rel="noopener noreferrer"
							className="w-fit rounded-full border border-[#8c8c8c] bg-[#ff93e2] px-6 py-2.5 text-base font-medium text-black hover:opacity-80 transition-opacity sm:text-lg"
						>
							Connect with me on Linkedin
						</a>
					</div>
				</section>

				{/* ── Skill-scroll ── */}
				<section className="flex flex-col gap-6 px-6 py-12 sm:px-10 lg:px-22 lg:py-16">
					<span className="inline-block w-fit bg-[#ff93e2] px-2.5 py-2.5 text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.2]">
						Skill-scroll!!!
					</span>
					<SkillBadges skills={skills} />
				</section>

				<hr className="mx-6 border-t border-[#d9d9d9] sm:mx-10 lg:mx-22" />

				{/* ── Education ── */}
				<section className="flex flex-col gap-9 px-6 py-12 sm:px-10 lg:px-22 lg:py-16">
					<h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.2]">Education</h2>
					<div className="flex flex-col gap-9 max-w-180">
						{education.map(({ title, period, description }) => (
							<div key={title} className="flex flex-col gap-4">
								<div className="flex flex-col gap-2">
									<p className="text-xl font-bold leading-[1.2] sm:text-2xl">{title}</p>
									<p className="text-base font-medium leading-[1.2] sm:text-lg">{period}</p>
								</div>
								<p className="text-base font-normal leading-[1.2] sm:text-lg">{description}</p>
							</div>
						))}
					</div>
				</section>

				<hr className="mx-6 border-t border-[#d9d9d9] sm:mx-10 lg:mx-22" />

				{/* ── Experience ── */}
				<section className="flex flex-col gap-9 px-6 py-12 sm:px-10 lg:px-22 lg:py-16">
					<h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.2]">Experience</h2>
					<div className="flex flex-col gap-9 max-w-180">
						{experience.map(({ title, period, description }) => (
							<div key={period} className="flex flex-col gap-4">
								<div className="flex flex-col gap-2">
									<p className="text-xl font-bold leading-[1.2] sm:text-2xl">{title}</p>
									<p className="text-base font-medium leading-[1.2] sm:text-lg">{period}</p>
								</div>
								<p className="text-base font-normal leading-[1.2] sm:text-lg">{description}</p>
							</div>
						))}
					</div>
					<ResumeAccordion items={moreExperience} />
				</section>

				<hr className="mx-6 border-t border-[#d9d9d9] sm:mx-10 lg:mx-22" />

				{/* ── Testimonials ── */}
				<section className="flex flex-col gap-12 px-6 py-12 sm:px-10 lg:gap-16 lg:px-22 lg:py-16">
					<div className="ml-auto flex w-full max-w-118.25 flex-col items-end gap-2">
						<div className="w-full rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] bg-[#6cd3fd] p-4 sm:p-6">
							<p className="text-lg font-normal leading-[1.2]">
								What&apos;s it like working with me then???
							</p>
						</div>
						<p className="text-sm font-normal sm:text-base">Delivered</p>
					</div>

					<div className="flex flex-col gap-9 max-w-137.25 sm:gap-13">
						{testimonials.map((testimonial) => (
							<TestimonialBubble key={testimonial.name} {...testimonial} />
						))}
					</div>
				</section>

				<Contact />
			</main>
		</>
	);
}

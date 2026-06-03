const projects = [
  {
    title: "Stålhästen",
    description:
      "Examination project at Brobygrafiska. A new brand identity, website, brand strategy and campaign.",
    href: "#",
  },
  {
    title: "Snacket",
    description:
      "A news app for young adults to keep them informed and encourage them to form their own opinions in a neutral and friendly space.",
    href: "#",
  },
  {
    title: "Mineralriket",
    description:
      "A school project at Brobygrafiska to help Mineralriket Geopark with a new brand identity, website and strategy.",
    href: "#",
  },
  {
    title: "Alstret",
    description:
      "School project in collaboration with Region Värmland and the EU project Culturality, creating a platform for artisans to share their work with focus on storytelling.",
    href: "#",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

interface WorkCardProps {
  title: string;
  description: string;
  href: string;
}

function WorkCard({ title, description, href }: WorkCardProps) {
  return (
    <article className="flex flex-col gap-4 px-6 py-10">
      {/* Image placeholder */}
      <div className="w-full aspect-623/509 bg-zinc-100 rounded-sm" />
      {/* Text */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[40px] font-bold text-black leading-tight">{title}</h3>
        <p className="text-2xl text-black font-normal leading-snug">{description}</p>
      </div>
      {/* See more link */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xl font-medium text-black hover:opacity-60 transition-opacity w-fit"
      >
        See more
        <ExternalLinkIcon />
      </a>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-[#fbfbfb] px-10 pt-10 pb-20">
      <h2 className="text-[32px] font-bold text-black mb-8 pl-6">
        Some of my work
      </h2>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About — Josefin Moström",
  description:
    "Learn more about Josefin Moström, digital designer and UX/UI developer based in Stockholm.",
};

const software = [
  { src: "/icon-figma.png", alt: "Figma", size: 42 },
  { src: "/icon-ai.png", alt: "Adobe Illustrator", size: 48 },
  { src: "/icon-lr.png", alt: "Adobe Lightroom", size: 48 },
  { src: "/icon-ae.png", alt: "Adobe After Effects", size: 48 },
  { src: "/icon-ps.png", alt: "Adobe Photoshop", size: 48 },
];

const interests = [
  "Graphic design",
  "Reading",
  "Outdoorsy stuff",
  "Music quizzes",
  "Cooking",
  "Secondhand shopping",
  "Reality tv",
  "Running really slow",
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
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#fbfbfb] overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="flex items-start">
          {/* Photo — bleeds off left edge */}
          <div className="relative overflow-hidden flex-[0_0_46%] min-h-[640px]">
            <img
              src="/about-photo.jpg"
              alt="Josefin Moström"
              className="absolute top-[106px] -left-[147px] w-[766px] h-[556px] object-cover"
            />
          </div>

          {/* Bio text */}
          <div className="flex-1 pr-20 pt-[106px] pb-20">
            <h1 className="text-[72px] font-bold leading-none mb-6">
              <span className="bg-[#6dff77] px-1">Hi!</span>
            </h1>
            <div className="text-2xl font-bold leading-[1.2] text-black space-y-4 max-w-[725px]">
              <p>
                I&apos;m Josefin, a 31 year old digital designer based in Stockholm.
                In 2024 I decided to quit my finance job and start doing something
                that I actually enjoy, so I packed up my apartment, moved to a small
                town called Sunne, and started the Digital Design program at
                Brobygrafiska. Did I enjoy it? YES.
              </p>
              <p>
                Now I&apos;m graduated and hungry for new opportunities where I can
                combine creativity, strategy, and problem-solving to create meaningful
                digital experiences. I&apos;m passionate about designing solutions
                that are not only visually appealing but also intuitive, accessible,
                and enjoyable to use.
              </p>
              <p>Let&apos;s do something fun together!</p>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="px-[127px] pb-16">
          <div className="flex gap-[58px] items-start">

            {/* Softwares */}
            <div className="w-[390px] shrink-0 bg-[rgba(255,253,120,0.19)] border border-[#d9d9d9] rounded-[20px] p-6 flex flex-col gap-6">
              <h2 className="text-[40px] font-bold leading-[1.2]">Softwares</h2>
              <div className="flex flex-wrap gap-[10px] items-center">
                {software.map(({ src, alt, size }) => (
                  <img
                    key={alt}
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="object-contain"
                    style={{ width: size, height: size }}
                  />
                ))}
              </div>
            </div>

            {/* I like… */}
            <div className="flex-1 bg-[rgba(26,188,254,0.08)] border border-[#d9d9d9] rounded-[20px] p-6 flex flex-col gap-6">
              <h2 className="text-[40px] font-bold leading-[1.2]">I like...</h2>
              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="border border-black rounded-full px-3 py-2 text-base font-medium leading-6 whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CV ── */}
        <section className="px-[127px] pb-20">
          <div className="flex gap-[58px] items-start">

            {/* Education */}
            <div className="w-[390px] shrink-0 bg-[rgba(255,222,238,0.36)] border border-[#d9d9d9] rounded-[20px] p-6 flex flex-col gap-6">
              <h2 className="text-[40px] font-bold leading-[1.2]">Education</h2>
              <div className="flex flex-col gap-4 text-xl leading-6">
                <div className="flex flex-col gap-3">
                  <p className="text-2xl font-bold">Brobygrafiska</p>
                  <p className="font-medium">Digital Designer program 2024-08 – 2026-05</p>
                </div>
                <p className="font-normal text-[20px]">
                  The program covers digital media design with a focus on
                  problem-solving and strategic brand communication. Tools used
                  include Figma, the Adobe Suite, and web development in HTML, CSS,
                  and JavaScript.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex-1 bg-[rgba(151,71,255,0.07)] border border-[#d9d9d9] rounded-[20px] p-6 flex flex-col gap-6">
              <h2 className="text-[40px] font-bold leading-[1.2]">Experience</h2>
              <div className="flex gap-[51px] text-xl leading-6">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl font-bold">Soleil AB</p>
                    <p className="font-medium">Internship 2025-04 – 2025-06</p>
                  </div>
                  <p className="font-normal">
                    Created and presented design proposals for Campus Skellefteå,
                    new design for internal employee handbook, intro to Javascript
                    framework Svelte.
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl font-bold">VNTRS</p>
                    <p className="font-medium">Internship 2026-01 – 2026-04</p>
                  </div>
                  <p className="font-normal">
                    Design system creation in Figma, creating and presenting new
                    brand guidelines, copy editing, user testing, designing social
                    media posts and presentations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="px-[127px] pb-24 flex flex-col gap-16">
          {testimonials.map(({ quote, date, name, title }) => (
            <div key={name} className="flex flex-col gap-5 max-w-[549px]">
              <div className="bg-[#b6eaff] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] p-3 flex items-center justify-center">
                <p className="text-xl font-normal leading-6 w-[449px]">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-normal">{date}</p>
                <p className="text-2xl font-medium">{name}</p>
                <p className="text-xl font-medium">{title}</p>
              </div>
            </div>
          ))}
        </section>

        <Contact />
      </main>
    </>
  );
}

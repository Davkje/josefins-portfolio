const STICKER_URL = "/sticker.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#fbfbfb] flex items-start justify-between gap-8 px-20 pt-42.5 pb-32"
    >
      <p className="flex-1 text-[64px] font-bold leading-[1.19] opacity-80 text-black max-w-230.75">
        Hi! I&apos;m Josefin – a newly graduated designer with a passion for{" "}
        <span className="bg-[#d4b2ff]">UX/UI</span>,{" "}
        <span className="bg-[#6dff77]">brand strategy</span> and{" "}
        <span className="bg-[#fffd78]">storytelling</span>.
      </p>
      <div className="shrink-0 w-121.5 h-123.75 mt-8">
        {/* Sticker illustration — replace src with /sticker.png once downloaded */}
        <img
          src={STICKER_URL}
          alt="Josefin illustration"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}

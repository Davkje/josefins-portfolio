export default function Contact() {
  return (
    <footer id="contact" className="bg-[#ebfcec] flex flex-col items-center justify-center h-67.75">
      <h2 className="text-[32px] font-bold text-black mb-8">
        Let&apos;s connect!
      </h2>
      <div className="flex items-center gap-8">
        <a href="mailto:hello@josefinmostrom.se" aria-label="Email">
          <img
            src="/icon-email.png"
            alt="Email"
            className="size-17.25 hover:opacity-70 transition-opacity"
          />
        </a>
        <a href="tel:+46" aria-label="Phone">
          <img
            src="/icon-phone.png"
            alt="Phone"
            className="size-17.25 hover:opacity-70 transition-opacity"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/josefinmostrom"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="/icon-linkedin.png"
            alt="LinkedIn"
            className="size-17.25 hover:opacity-70 transition-opacity"
          />
        </a>
      </div>
    </footer>
  );
}

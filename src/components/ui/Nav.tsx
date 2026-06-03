import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-[#ebfcec] sticky top-0 z-50 flex items-center justify-between h-[75px] px-20 w-full">
      <Link
        href="/"
        className="font-bold text-xl tracking-[0.4px] text-black hover:opacity-70 transition-opacity"
      >
        Josefin Moström
      </Link>
      <nav className="flex items-center gap-[57px] text-xl font-medium text-black">
        <Link href="/about" className="hover:opacity-60 transition-opacity">
          About
        </Link>
        <a href="#contact" className="hover:opacity-60 transition-opacity">
          Contact
        </a>
        <a
          href="https://www.behance.net/josefinmostrom"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          Behance
        </a>
      </nav>
    </header>
  );
}

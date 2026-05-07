import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      {/* Background stays Cream, Text stays Base-Dark */}
      <div className="bg-cream rounded-xl py-4 px-8 flex items-center justify-between shadow-2xl">
        <div className="text-xl font-black text-base-dark tracking-tight">
          Hafsa Farooq
        </div>

        <div className="hidden md:flex items-center gap-8 text-base-dark/70 font-bold uppercase text-[10px] tracking-widest">
          <Link href="#about" className="hover:text-accent-rose transition-colors">About</Link>
          <span className="text-base-dark/20">/</span>
          <Link href="#projects" className="hover:text-accent-rose transition-colors">Projects</Link>
          <span className="text-base-dark/20">/</span>
          <Link href="#contact" className="hover:text-accent-rose transition-colors">Contact</Link>
          
          <Link href="#contact" className="border-2 border-base-dark px-6 py-2 rounded-lg text-base-dark hover:bg-base-dark hover:text-cream transition-all">
            Contact ↗
          </Link>
        </div>
      </div>
    </nav>
  );
}
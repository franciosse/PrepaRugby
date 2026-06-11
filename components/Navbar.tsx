import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-900/50 bg-[#050d05]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-emerald-400 text-lg tracking-tight hover:text-emerald-300 transition-colors">
          <span className="text-2xl">🏉</span>
          <span>Prépa Rugby</span>
        </Link>
        <div className="text-xs text-emerald-700 font-mono">
          6 semaines · 5 séances/sem
        </div>
      </div>
    </nav>
  );
}

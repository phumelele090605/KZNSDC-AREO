import { useEffect, useState } from 'react';
import { Menu, Rocket, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-primary-700 shadow-lg' : 'bg-primary-700/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-500 text-primary-900 transition-transform duration-300 group-hover:rotate-12">
              <Rocket className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <span className="font-heading font-extrabold text-lg md:text-xl text-white tracking-tight">
              KZN<span className="text-accent-500">sdc</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-semibold text-white/90 hover:text-accent-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#notify"
            className="hidden md:inline-flex items-center rounded-full bg-accent-500 px-5 py-2.5 font-heading text-sm font-bold text-primary-900 shadow-sm transition-all duration-200 hover:bg-accent-400 hover:shadow-md"
          >
            Notify Me for 2027
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary-700 border-t border-primary-600 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-white/90 hover:text-accent-500 py-3 border-b border-white/10 last:border-b-0 font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#notify"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-3 font-heading text-sm font-bold text-primary-900"
            >
              Notify Me for 2027
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

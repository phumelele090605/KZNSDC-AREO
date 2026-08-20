import { Facebook, Instagram, Rocket, Twitter } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [Facebook, Instagram, Twitter];

export default function Footer() {
  return (
    <footer className="bg-primary-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-500 text-primary-900">
                <Rocket className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-heading font-extrabold text-lg text-white">
                KZN<span className="text-accent-500">sdc</span>
              </span>
            </a>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              KwaZulu-Natal Space Design Competition &mdash; designing the future from Durban.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wide mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-accent-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-2 font-body text-sm text-white/70">
              <li>Durban, KwaZulu-Natal</li>
              <li>info@kznsdc.org</li>
              <li>+27 31 123 4567</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wide mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/80 transition-colors duration-200 hover:bg-accent-500 hover:text-primary-900"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="font-body text-xs text-white/60">
            &copy; 2026 KZNsdc &mdash; KwaZulu-Natal Space Design Competition. Durban, KwaZulu-Natal.
          </p>
        </div>
      </div>
    </footer>
  );
}

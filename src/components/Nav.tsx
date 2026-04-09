import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b10]/90 backdrop-blur-md border-b border-[#1a1d2e]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-[#0a0b10] rounded text-sm transition-colors"
            style={{ fontWeight: 600 }}
          >
            Contact Me
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1017] border-t border-[#1a1d2e] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-[#0a0b10] rounded text-sm w-fit transition-colors"
            style={{ fontWeight: 600 }}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}

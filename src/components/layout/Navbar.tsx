import { useEffect, useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { navLinks, profile } from '@/data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-steel-700 bg-charcoal/95 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-safety-500 text-charcoal transition-transform duration-300 group-hover:scale-105">
            <Flame className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold uppercase tracking-wide text-ink">
            {profile.name}
            <span className="ml-2 hidden text-steel-300 sm:inline">/ Safety Command Center</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 font-medium text-steel-300 transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact">Contact Sombir</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-steel-600 text-ink transition-colors hover:border-safety-500 lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-charcoal transition-all duration-300 lg:hidden ${
          open ? 'max-h-[420px] border-t border-steel-700' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-steel-800 py-3 font-medium text-steel-300 transition-colors hover:text-safety-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-safety-500 px-5 py-3 text-center font-display text-sm font-bold uppercase tracking-wider text-charcoal"
            >
              Contact Sombir
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

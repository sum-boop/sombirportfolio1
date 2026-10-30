import { Flame } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-steel-800 bg-steel-900/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-safety-500 text-charcoal">
            <Flame className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold uppercase tracking-wide text-ink">{profile.name}</span>
            <span className="text-sm text-steel-400">{profile.headline}</span>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-steel-300 transition-colors hover:text-safety-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-steel-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

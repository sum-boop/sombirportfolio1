import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  muted?: boolean;
  children: ReactNode;
}

export default function Section({ id, muted = false, children }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-24 sm:py-32 ${muted ? 'bg-steel-900/60' : ''}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

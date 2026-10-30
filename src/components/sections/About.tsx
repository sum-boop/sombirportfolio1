import { ShieldCheck } from 'lucide-react';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutPillars, profile } from '@/data/portfolioData';

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="About Sombir" title="Protecting people and property under pressure" />
          <div className="flex flex-col gap-5">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-[1.5] text-steel-300 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-md border-l-4 border-safety-500 bg-surface px-4 py-3">
            <ShieldCheck className="h-4 w-4 shrink-0 text-safety-400" aria-hidden="true" />
            <p className="text-sm font-medium text-ink">{profile.availability}</p>
          </div>
        </div>

        <ul className="grid self-center gap-5">
          {aboutPillars.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <Card interactive className="group flex gap-5 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-safety-500/15 text-safety-500 transition-colors duration-300 group-hover:bg-safety-500 group-hover:text-charcoal">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold uppercase text-ink">{title}</h3>
                  <p className="leading-[1.5] text-steel-300">{description}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { timeline } from '@/data/portfolioData';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I have served"
        description="From an operational fire station to a live logistics hub that never fully sleeps."
      />

      <ol className="relative ml-3 mt-14 flex flex-col gap-12 border-l-2 border-steel-700 pl-8 sm:ml-4 sm:pl-12">
        {timeline.map((entry, index) => {
          const Icon = entry.icon;
          const isCurrent = index === 0;
          return (
            <li key={entry.id} className="relative">
              <span
                className="absolute -left-[2.625rem] top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-safety-500 bg-charcoal sm:-left-[3.625rem]"
                aria-hidden="true"
              >
                <span className={`h-2 w-2 rounded-full bg-safety-500 ${isCurrent ? 'animate-pulse' : ''}`} />
              </span>

              <Card interactive className="flex flex-col gap-6 p-6 sm:p-8">
                <header className="flex flex-col gap-4 border-b border-steel-700 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-safety-500/15 text-safety-500">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-2xl font-bold uppercase leading-[1.2] text-ink">{entry.role}</h3>
                      <p className="font-medium text-safety-400">{entry.organization}</p>
                      <p className="text-sm text-steel-400">{entry.location}</p>
                    </div>
                  </div>
                  <Badge tone={isCurrent ? 'success' : 'neutral'}>{entry.period}</Badge>
                </header>

                <p className="leading-[1.5] text-steel-300">{entry.summary}</p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-[1.5] text-ink">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-alert-500" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { bentoItems } from '@/data/portfolioData';

export default function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeading
        eyebrow="Core Expertise"
        title="Systems I keep ready"
        description="The fire protection disciplines I inspect, maintain, and drill every day across the site."
      />

      <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {bentoItems.map(({ id, title, description, icon: Icon, size }) => (
          <li key={id} className={size === 'wide' ? 'md:col-span-2' : ''}>
            <Card interactive className="group flex h-full flex-col gap-5 p-7">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-safety-500/0 via-transparent to-alert-500/0 opacity-0 transition-opacity duration-500 group-hover:from-safety-500/10 group-hover:to-alert-500/5 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-safety-500/40 bg-charcoal text-safety-500 transition-colors duration-300 group-hover:bg-safety-500 group-hover:text-charcoal">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="relative flex flex-col gap-3">
                <h3 className="font-display text-2xl font-bold uppercase text-ink">{title}</h3>
                <p className="leading-[1.5] text-steel-300">{description}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

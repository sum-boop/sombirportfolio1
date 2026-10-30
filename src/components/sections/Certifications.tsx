import { Award, BadgeCheck } from 'lucide-react';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { certifications } from '@/data/portfolioData';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Training and certifications"
        description="Formal training behind the systems, drills, and response plans I am responsible for."
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <li key={cert.id}>
            <Card interactive className="group flex h-full items-start gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-safety-500/15 text-safety-500 transition-colors duration-300 group-hover:bg-safety-500 group-hover:text-charcoal">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold uppercase leading-[1.2] text-ink">{cert.title}</h3>
                {(cert.issuer || cert.year) && (
                  <p className="flex flex-wrap items-center gap-2 text-sm text-steel-400">
                    <BadgeCheck className="h-4 w-4 text-success-400" aria-hidden="true" />
                    {[cert.issuer, cert.year].filter(Boolean).join(' | ')}
                  </p>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

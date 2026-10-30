import { ArrowRight, Phone, Radio } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { contact, focusAreasStatus, profile, safetyStats } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="technical-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-charcoal to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-7 animate-fade-up">
          <Badge tone="alert" pulse className="px-4 py-1.5 text-sm tracking-wider">
            Emergency Readiness Active
          </Badge>

          <div className="flex flex-col gap-4">
            <p className="font-display text-xl font-semibold uppercase tracking-[0.25em] text-safety-400">
              {profile.role}
            </p>
            <h1 className="font-display text-5xl font-bold uppercase leading-[1.2] text-ink sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="font-display text-2xl font-semibold uppercase leading-[1.2] text-steel-300 sm:text-3xl">
              {profile.headline}
            </p>
          </div>

          <p className="max-w-xl text-base leading-[1.5] text-steel-300 sm:text-lg">{profile.tagline}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={contact.phoneHref} size="lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </Button>
            <Button href="#operations" variant="secondary" size="lg">
              View Operations
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </div>

          <dl className="grid grid-cols-2 gap-4 border-t border-steel-800 pt-7 sm:grid-cols-4">
            {safetyStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-steel-400">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-safety-400">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Card className="p-6 shadow-2xl shadow-black/40 animate-fade-up [animation-delay:150ms] sm:p-8">
          <aside aria-label="Focus systems status">
            <div className="mb-6 flex items-center justify-between border-b border-steel-700 pb-4">
              <span className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-steel-300">
                <Radio className="h-4 w-4 text-safety-500" aria-hidden="true" />
                Systems Command
              </span>
              <Badge tone="success">Online</Badge>
            </div>

            <ul className="flex flex-col gap-4">
              {focusAreasStatus.map((area) => (
                <li
                  key={area.label}
                  className="flex items-center justify-between gap-4 rounded-lg bg-charcoal/60 px-4 py-3"
                >
                  <span className="font-medium text-ink">{area.label}</span>
                  <span className="flex items-center gap-2 text-sm text-steel-300">
                    <span className="h-2 w-2 rounded-full bg-success-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" aria-hidden="true" />
                    {area.status}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-[1.5] text-steel-400">
              Based at {profile.currentSite}, {profile.location}.
            </p>
          </aside>
        </Card>
      </div>
    </section>
  );
}

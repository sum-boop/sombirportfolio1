import { useState } from 'react';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { equipmentCategories, responseProtocol } from '@/data/portfolioData';

export default function Operations() {
  const [activeId, setActiveId] = useState(equipmentCategories[0].id);
  const active = equipmentCategories.find((category) => category.id === activeId) ?? equipmentCategories[0];

  return (
    <Section id="operations" muted>
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="Featured Highlights"
          title="Equipment and emergency response"
          description="The hydrant, sprinkler, and pump infrastructure I maintain, and the sequence every team follows when an alarm sounds."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="flex flex-col gap-6 p-6 sm:p-8">
            <div role="tablist" aria-label="Equipment categories" className="flex flex-wrap gap-2">
              {equipmentCategories.map((category) => {
                const selected = category.id === active.id;
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    id={`tab-${category.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${category.id}`}
                    onClick={() => setActiveId(category.id)}
                    className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-500 ${
                      selected
                        ? 'border-safety-500 bg-safety-500 text-charcoal shadow-glow-safety'
                        : 'border-steel-600 text-steel-300 hover:border-safety-500 hover:text-ink'
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {category.label}
                  </button>
                );
              })}
            </div>

            <ul
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              className="flex flex-col gap-3 animate-fade-up"
              key={active.id}
            >
              {active.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start gap-4 rounded-lg border border-steel-700 bg-charcoal/70 p-4 transition-colors duration-200 hover:border-steel-500"
                >
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-500 shadow-[0_0_8px_rgba(34,197,94,0.7)]"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-ink">{item.name}</span>
                    <span className="text-sm leading-[1.5] text-steel-300">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-steel-300">
              Emergency response sequence
            </h3>
            <ol className="flex flex-col gap-3">
              {responseProtocol.map((step, index) => {
                const Icon = step.icon;
                const isAlert = index === 0;
                return (
                  <li
                    key={step.id}
                    className={`group flex items-start gap-5 rounded-xl border p-5 transition-all duration-300 hover:translate-x-1 ${
                      isAlert
                        ? 'border-alert-500/60 bg-alert-900/30 shadow-glow-alert'
                        : 'border-steel-700 bg-surface hover:border-safety-500/50'
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-display text-xl font-bold ${
                        isAlert ? 'bg-alert-500 text-ink' : 'bg-safety-500 text-charcoal'
                      }`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`h-4 w-4 ${isAlert ? 'text-alert-300' : 'text-safety-400'}`}
                          aria-hidden="true"
                        />
                        <span className="font-display text-xl font-bold uppercase text-ink">{step.title}</span>
                      </div>
                      <p className="text-sm leading-[1.5] text-steel-300">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}

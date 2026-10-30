interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex max-w-2xl flex-col items-start gap-4">
      <span className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-safety-500">
        <span className="h-px w-8 bg-safety-500" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-bold uppercase leading-[1.2] text-ink sm:text-5xl">{title}</h2>
      {description && <p className="text-base leading-[1.5] text-steel-300 sm:text-lg">{description}</p>}
    </div>
  );
}

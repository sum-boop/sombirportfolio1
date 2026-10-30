import { useState, type FormEvent } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { contact, profile } from '@/data/portfolioData';

const channels = [
  { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: 'Email', value: contact.email, href: contact.emailHref },
  { icon: MapPin, label: 'Location', value: contact.location, href: undefined },
];

const MAX_MESSAGE_LENGTH = 1000;

const inputClasses =
  'w-full rounded-md border border-steel-700 bg-charcoal px-4 py-3 text-ink placeholder:text-steel-500 transition-colors duration-200 focus:border-safety-500 focus:outline-none focus:ring-2 focus:ring-safety-500/40';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      setError('Please write a short message before sending.');
      return;
    }

    const trimmedName = name.trim();
    const text = [
      `Hello ${profile.name},`,
      trimmedName ? `This is ${trimmedName}.` : null,
      trimmedMessage,
    ]
      .filter(Boolean)
      .join('\n\n');

    setError(null);
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Get In Touch"
            title={`Need a fire safety partner? Reach ${profile.name}`}
            description="For site audits, drill planning, or fire safety reviews, get in touch directly. Calls and WhatsApp messages are the fastest way to reach me."
          />

          <ul className="flex flex-col gap-4">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-charcoal text-safety-500 transition-colors duration-300 group-hover:bg-safety-500 group-hover:text-charcoal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-steel-400">
                      {label}
                    </span>
                    <span className="break-words text-lg font-medium text-ink">{value}</span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="group block focus-visible:outline-none">
                      <Card interactive className="flex items-center gap-5 p-6 group-focus-visible:ring-2 group-focus-visible:ring-safety-500">
                        {content}
                      </Card>
                    </a>
                  ) : (
                    <Card className="group flex items-center gap-5 p-6">{content}</Card>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <Card className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-2xl font-bold uppercase text-ink">Send a WhatsApp message</h3>
            <p className="text-sm leading-[1.5] text-steel-400">
              Your message opens in WhatsApp, ready to send to {profile.name}.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-steel-300">
                Your name <span className="text-steel-500">(optional)</span>
              </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={80}
                autoComplete="name"
                placeholder="Full name"
                className={inputClasses}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-steel-300">Message</span>
              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  if (error) setError(null);
                }}
                maxLength={MAX_MESSAGE_LENGTH}
                rows={5}
                placeholder="Tell me about your site, audit, or drill requirements"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'contact-error' : undefined}
                className={`${inputClasses} resize-y`}
              />
              <span className="self-end text-xs text-steel-500">
                {message.length}/{MAX_MESSAGE_LENGTH}
              </span>
            </label>

            {error && (
              <p id="contact-error" role="alert" className="rounded-md border border-alert-500/50 bg-alert-900/40 px-4 py-3 text-sm text-alert-300">
                {error}
              </p>
            )}

            <Button type="submit" size="lg" className="w-full">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Send on WhatsApp
              <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

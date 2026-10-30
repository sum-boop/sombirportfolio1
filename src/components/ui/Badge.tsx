import type { ReactNode } from 'react';

type Tone = 'alert' | 'success' | 'safety' | 'neutral';

interface BadgeProps {
  tone?: Tone;
  pulse?: boolean;
  className?: string;
  children: ReactNode;
}

const tones: Record<Tone, string> = {
  alert: 'border border-alert-500/50 bg-alert-900/40 text-alert-300 shadow-glow-alert',
  success: 'bg-success-500/15 text-success-400',
  safety: 'bg-safety-500/15 text-safety-400',
  neutral: 'bg-steel-700 text-steel-300',
};

export default function Badge({ tone = 'neutral', pulse = false, className = '', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-pulse-alert rounded-full bg-alert-500" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-alert-500" />
        </span>
      )}
      {children}
    </span>
  );
}

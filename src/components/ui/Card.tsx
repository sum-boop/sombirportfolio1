import type { ReactNode } from 'react';

interface CardProps {
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Card({ interactive = false, className = '', children }: CardProps) {
  const interaction = interactive
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-safety-500/60 hover:shadow-glow-card'
    : '';

  return <div className={`panel-edge relative overflow-hidden rounded-xl ${interaction} ${className}`}>{children}</div>;
}

import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonElementProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

interface LinkProps extends BaseProps {
  href: string;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-md font-display font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-safety-500 text-charcoal shadow-glow-safety hover:-translate-y-0.5 hover:bg-safety-400',
  secondary: 'border border-steel-500 text-ink hover:border-safety-500 hover:text-safety-400',
  ghost: 'text-steel-300 hover:text-ink',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export default function Button(props: ButtonElementProps | LinkProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} disabled={props.disabled} className={classes}>
      {children}
    </button>
  );
}

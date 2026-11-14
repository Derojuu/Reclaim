import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'quiet' | 'default';
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  href,
  onClick,
  className,
  children,
  external,
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const classes = cn(
    'button',
    variant === 'primary' && 'primary',
    variant === 'quiet' && 'quiet',
    className
  );

  if (href) {
    if (external || href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

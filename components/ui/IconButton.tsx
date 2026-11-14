import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface IconButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  'aria-label': string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const IconButton: React.FC<IconButtonProps> = ({
  href,
  onClick,
  className,
  children,
  'aria-label': ariaLabel,
  external,
  type = 'button',
}) => {
  const classes = cn('icon-button', className);

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

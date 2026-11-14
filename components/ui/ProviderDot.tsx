import React from 'react';
import { cn } from '@/lib/utils';

interface ProviderDotProps {
  color: 'clay' | 'green';
  className?: string;
}

export const ProviderDot: React.FC<ProviderDotProps> = ({ color, className }) => {
  return <i className={cn('provider-dot', color, className)} aria-hidden="true" />;
};

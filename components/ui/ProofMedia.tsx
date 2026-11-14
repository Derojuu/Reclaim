import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProofMediaProps {
  src: string;
  alt: string;
  className?: string;
  figcaption?: string;
  priority?: boolean;
}

export const ProofMedia: React.FC<ProofMediaProps> = ({
  src,
  alt,
  className,
  figcaption,
  priority = false,
}) => {
  return (
    <figure className={cn('proof-media', className)} data-reveal="true">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        className="w-full h-auto object-cover"
      />
      {figcaption && <figcaption>{figcaption}</figcaption>}
    </figure>
  );
};

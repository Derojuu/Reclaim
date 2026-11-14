'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SITE_CONFIG } from '@/constants/site';
import { HugeiconsIcon } from '@hugeicons/react';
import { ShoppingCart01Icon } from '@hugeicons/core-free-icons';

export const Navbar: React.FC = () => {
  const { itemCount } = useCart();

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="wrap nav-inner">
        <Link href="/#top" className="brand" aria-label="Reclaim home">
          <Image
            src={SITE_CONFIG.images.logo}
            alt=""
            width={38}
            height={38}
            className="w-[38px] h-[38px] rounded-[10px]"
            priority
          />
          <span>{SITE_CONFIG.name}</span>
        </Link>

        <div className="nav-actions">
          <Link
            href="/cart"
            className="icon-button relative"
            aria-label={`Shopping cart with ${itemCount} items`}
            title="View Cart"
          >
            <HugeiconsIcon icon={ShoppingCart01Icon} size={15} />
            {itemCount > 0 && (
              <span className="mono absolute -top-1.5 -right-1.5 min-w-[17px] h-[17px] px-1 text-[10px] font-bold bg-[#d97757] text-white rounded-full flex items-center justify-center border border-[var(--ink)] leading-none">
                {itemCount}
              </span>
            )}
          </Link>

          <a
            className="icon-button"
            href={SITE_CONFIG.twitterUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Reclaim on X"
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <ThemeToggle />

          <a
            className="nav-cta"
            href={SITE_CONFIG.downloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get it for Mac
          </a>
        </div>
      </div>
    </nav>
  );
};

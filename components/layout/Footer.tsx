import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/constants/site';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Image
            src={SITE_CONFIG.images.logo}
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 rounded-md inline-block mr-2"
          />
          {SITE_CONFIG.name}
        </div>
        <div className="mono">
          <a href={SITE_CONFIG.twitterUrl} target="_blank" rel="noreferrer">
            {SITE_CONFIG.twitterHandle}
          </a>
          <span> · made for the Glaze Awards · 2026</span>
        </div>
      </div>
    </footer>
  );
};

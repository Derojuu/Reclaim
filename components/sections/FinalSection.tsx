import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/constants/site';

export const FinalSection: React.FC = () => {
  return (
    <section className="final" id="download">
      <div className="wrap">
        <div className="final-lines" data-reveal="true">
          <span>See what they leave behind.</span>
          <span>Know when they need you.</span>
          <span>Know how long you have left.</span>
        </div>

        <div className="final-lockup" data-reveal="true">
          <Image
            src={SITE_CONFIG.images.logo}
            alt=""
            width={72}
            height={72}
            className="w-[72px] h-[72px] rounded-2xl"
          />
          <h2>That’s Reclaim.</h2>
        </div>

        <a
          className="button primary final-button"
          href={SITE_CONFIG.downloadUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get Reclaim for Mac
        </a>

        <p className="award-note">
          Built for the Glaze Awards. An upvote in the Store means a lot. ♥
        </p>

        <div className="qr-wrap">
          <a
            href={SITE_CONFIG.downloadUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Reclaim on the Glaze Store"
          >
            <Image
              src={SITE_CONFIG.images.qr}
              alt="QR code for Reclaim on the Glaze Store"
              width={160}
              height={160}
              className="w-40 h-40"
            />
          </a>
          <span className="mono">On your phone? Scan to open.</span>
        </div>
      </div>
    </section>
  );
};

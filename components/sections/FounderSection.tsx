import React from 'react';
import { ProofMedia } from '@/components/ui/ProofMedia';
import { SITE_CONFIG } from '@/constants/site';

export const FounderSection: React.FC = () => {
  return (
    <section className="founder-turn">
      <div className="wrap founder-grid">
        <div className="founder-copy" data-reveal="true">
          <p className="eyebrow mono">Built around the work</p>
          <h2>We could have stopped at cleanup.</h2>
          <p>
            But Reclaim is built for people who live in coding agents—so we kept
            going.
          </p>
        </div>

        <ProofMedia
          src={SITE_CONFIG.images.work}
          alt="Reclaim showing projects, sessions, history, and linked Codex work"
          className="work-proof"
        />
      </div>
    </section>
  );
};

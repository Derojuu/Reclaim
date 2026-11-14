import React from 'react';
import { ProofMedia } from '@/components/ui/ProofMedia';
import { SITE_CONFIG } from '@/constants/site';

export const UsageSection: React.FC = () => {
  return (
    <section className="chapter usage-chapter" id="usage">
      <div className="wrap usage-grid">
        <div className="usage-copy" data-reveal="true">
          <p className="eyebrow mono">Before the next task</p>
          <h2>Know your limits before the work starts.</h2>
          <p>
            One click shows your Claude Code and Codex five-hour and weekly
            usage, how much is left, and when it resets. So you do not find out
            halfway through the work.
          </p>
          <p className="truth-note">
            Codex limits use provider data when available. Claude usage is live
            when available and clearly labels an estimate when it is not.
          </p>
        </div>

        <ProofMedia
          src={SITE_CONFIG.images.usage}
          alt="Reclaim showing Claude Code and Codex usage windows and their data sources"
          className="usage-proof"
        />
      </div>
    </section>
  );
};

import React from 'react';
import { ProofMedia } from '@/components/ui/ProofMedia';
import { InteractivePet } from '@/components/ui/InteractivePet';
import { SITE_CONFIG } from '@/constants/site';

export const PetSection: React.FC = () => {
  return (
    <section className="chapter pet-chapter" id="pet">
      <div className="wrap">
        <header className="chapter-head" data-reveal="true">
          <p className="eyebrow mono">When the agent needs you</p>
          <div>
            <h2>
              You start a task, open a video, then come back to one unanswered
              question.
            </h2>
            <p className="chapter-copy">
              Reclaim’s desktop pet follows your most recent agent. It tells you
              when that agent needs input—and makes a sound when the task is done.
            </p>
          </div>
        </header>

        <div className="pet-grid">
          <ProofMedia
            src={SITE_CONFIG.images.floating}
            alt="The Reclaim pet floating over a coding workspace"
            className="floating-proof"
          />

          <InteractivePet />
        </div>

        <ProofMedia
          src={SITE_CONFIG.images.state}
          alt="Reclaim showing the most recent agent waiting for input and completed events"
          className="state-proof"
        />
      </div>
    </section>
  );
};

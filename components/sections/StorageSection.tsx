import React from 'react';
import { ProofMedia } from '@/components/ui/ProofMedia';
import { SITE_CONFIG, OUTCOME_KEYS, ATTRIBUTION_LEVELS } from '@/constants/site';

export const StorageSection: React.FC = () => {
  return (
    <section className="chapter storage-chapter" id="storage">
      <div className="wrap">
        <header className="chapter-head" data-reveal="true">
          <p className="eyebrow mono">The hidden storage problem</p>
          <div>
            <h2>Finder shows the problem. Reclaim shows where it came from.</h2>
            <p className="chapter-copy">
              See the footprint by agent, project, session, and type—without digging
              through hidden folders and guessing what belongs to what.
            </p>
          </div>
        </header>

        <div
          className="attribution-rail mono"
          data-reveal="true"
          aria-label="Reclaim attribution levels"
        >
          {ATTRIBUTION_LEVELS.map((level, idx) => (
            <React.Fragment key={level}>
              <span>{level}</span>
              {idx < ATTRIBUTION_LEVELS.length - 1 && <i />}
            </React.Fragment>
          ))}
        </div>

        <ProofMedia
          src={SITE_CONFIG.images.inventory}
          alt="Reclaim showing the local footprint left by coding agents"
          className="inventory-proof"
          figcaption="Real Reclaim inventory and classification surface."
        />

        <div className="outcome-grid">
          <div className="outcome-copy" data-reveal="true">
            <p className="eyebrow mono">What stays. What moves. What can go.</p>
            <h3>Clear the footprint without hiding the outcome.</h3>
            <p>
              Reclaim shows what is active, what is old, and what each cleanup choice
              will do. Archives stay on disk. Finder Trash frees space after you empty
              it. Only strict regenerable caches can be cleared for good.
            </p>
            <div className="outcome-keys mono" aria-label="Cleanup outcomes">
              {OUTCOME_KEYS.map((key) => (
                <span key={key}>{key}</span>
              ))}
            </div>
          </div>

          <ProofMedia
            src={SITE_CONFIG.images.receipt}
            alt="Reclaim showing archive, Finder Trash, and regenerable-cache outcomes"
            className="receipt-proof"
          />
        </div>
      </div>
    </section>
  );
};

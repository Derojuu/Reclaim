import React from 'react';
import { ProviderDot } from '@/components/ui/ProviderDot';
import { StorageBar } from '@/components/ui/StorageBar';
import { SITE_CONFIG } from '@/constants/site';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-kicker mono">
          <ProviderDot color="clay" /> Claude Code
          <ProviderDot color="green" /> Codex
          <span>on your Mac</span>
        </div>

        <h1 className="hero-title">
          <span>If your Mac keeps running out of storage,</span>
          <span className="hero-answer">
            your coding agents might be the reason why.
          </span>
        </h1>

        <p className="hero-copy">
          Claude Code and Codex leave sessions, subagents, logs, and caches across
          your Mac. In one public Codex report, those files grew to{' '}
          <a
            href={SITE_CONFIG.reports.codex91gb}
            target="_blank"
            rel="noreferrer"
          >
            almost 100 GB
          </a>
          . Reclaim shows what took the space and what you can clear.
        </p>

        <div className="hero-actions">
          <a
            className="button primary"
            href={SITE_CONFIG.downloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get Reclaim for Mac
          </a>
          <a className="button quiet" href="#storage">
            See what it finds ↓
          </a>
        </div>

        <StorageBar />

        <p className="source-note">
          Public reports include a Codex session store near 91 GB and an extreme
          subagent-heavy case above 700 GiB. These are reported cases, not a
          typical result.{' '}
          <a
            href={SITE_CONFIG.reports.codex91gb}
            target="_blank"
            rel="noreferrer"
          >
            91 GB report ↗
          </a>
          <span> · </span>
          <a
            href={SITE_CONFIG.reports.codexExtreme}
            target="_blank"
            rel="noreferrer"
          >
            extreme case ↗
          </a>
        </p>
      </div>
    </section>
  );
};

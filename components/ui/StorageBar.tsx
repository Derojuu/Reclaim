import React from 'react';
import { ProviderDot } from '@/components/ui/ProviderDot';

export const StorageBar: React.FC = () => {
  return (
    <div
      className="storage-symptom"
      aria-label="A full Mac storage bar with Claude Code and Codex footprint highlighted"
    >
      <div className="symptom-labels mono">
        <span>Finder: your Mac is full</span>
        <span>Source: unclear</span>
      </div>
      <div className="storage-bar" aria-hidden="true">
        <i className="system-segment" />
        <i className="agent-segment clay" />
        <i className="agent-segment green" />
        <i className="free-segment" />
      </div>
      <div className="agent-key mono" aria-hidden="true">
        <span>
          <ProviderDot color="clay" /> Claude Code footprint
        </span>
        <span>
          <ProviderDot color="green" /> Codex footprint
        </span>
      </div>
    </div>
  );
};

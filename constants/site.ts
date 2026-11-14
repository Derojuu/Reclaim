export const SITE_CONFIG = {
  name: 'Reclaim',
  tagline: 'see what your coding agents leave behind',
  title: 'Reclaim — see what your coding agents leave behind',
  description: 'See what Claude Code and Codex leave behind, know when your latest agent needs you, and check your usage before you hit a limit.',
  url: 'https://getreclaim.xyz/',
  twitterHandle: '@getreclaim',
  twitterUrl: 'https://x.com/getreclaim',
  downloadUrl: 'https://www.glaze.app/app/reclaim-ed33HB',
  reports: {
    codex91gb: 'https://github.com/openai/codex/issues/24948',
    codexExtreme: 'https://github.com/openai/codex/issues/34061',
  },
  images: {
    logo: '/images/reclaim-logo.png',
    inventory: '/images/04-inventory.png',
    receipt: '/images/05-receipt.png',
    work: '/images/06-work.png',
    floating: '/images/07-floating.png',
    state: '/images/08-state.png',
    usage: '/images/09-usage.png',
    qr: '/images/glaze-qr.png',
  },
} as const;

export const OUTCOME_KEYS = [
  'Active',
  'History',
  'Protected',
  'Archive · 0 B',
  'Finder Trash',
  'Regenerable cache',
] as const;

export const ATTRIBUTION_LEVELS = ['Agent', 'Project', 'Session'] as const;

export const PET_STATES = ['Working', 'Needs you', 'Done', 'Quiet'] as const;
